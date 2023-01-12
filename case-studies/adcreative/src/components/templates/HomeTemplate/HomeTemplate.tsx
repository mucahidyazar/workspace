import { yupResolver } from '@hookform/resolvers/yup';
import { useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useLanguage } from 'next-translation';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Todo, TodoLoader } from '@/atoms';
import { LANGUAGE, THEME } from '@/constants';
import { ITodo } from '@/mocks';
import { useTheme } from '@/providers';
import { useMutationCreateTodo, useQueryListTodo } from '@/request/services';

import * as S from './style';

const schema = yup.object().shape({
  todo: yup.string().min(5).max(255).required()
});

export function HomeTemplate() {
  const { t, changeLanguage } = useLanguage()
  const [appTheme, setAppTheme] = useTheme();
  const router = useRouter()
  console.log({
    x: router.locales
  })

  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      todo: ''
    },
    resolver: yupResolver(schema)
  });

  const date = new Date();
  const formattedDay = format(date, 'EEE d');
  const formattedTime = format(date, 'p');

  const onSubmitHandler = (data: { todo: string }) => {
    mutateCreateTodo(data);
  };

  const { data: dataListTodo, isLoading: isListTodoLoading } = useQueryListTodo()
  const todos = dataListTodo?.todos

  const { mutate: mutateCreateTodo, isLoading: isCreateTodoLoading } = useMutationCreateTodo({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['listTodo'] });
      reset();
    }
  });

  const themes = Object.values(THEME) as (keyof typeof THEME)[]
  const languages = Object.values(LANGUAGE) as (keyof typeof LANGUAGE)[]

  return (
    <S.HomeTemplate>
      <S.What>
        <S.WhatTitle>{t('todos')}</S.WhatTitle>
        <S.WhatLanguages>
          {languages.map(language => (
            <S.WhatLanguage
              key={language}
              isActive={router.locale === language}
              onClick={() => changeLanguage(language)}
            >
              {language}
            </S.WhatLanguage>
          ))}
        </S.WhatLanguages>
        <S.WhatThemes>
          {themes.map(theme => (
            <S.WhatTheme
              key={theme}
              isActive={theme === appTheme}
              onClick={() => setAppTheme(theme)}
            >
              {theme}
            </S.WhatTheme>
          ))}
        </S.WhatThemes>
      </S.What>
      <S.TodoSection>
        <S.TodoHeader>
          <S.TodoHeaderImage
            src="https://images.unsplash.com/photo-1672162724304-866bd48a3d6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2786&q=80"
            alt="todo"
            width={430}
            height={202}
          />
          <S.TodoHeaderInfo>
            <S.TodoHeaderDate>{formattedDay}</S.TodoHeaderDate>
            <S.TodoHeaderTime>{formattedTime}</S.TodoHeaderTime>
          </S.TodoHeaderInfo>
        </S.TodoHeader>

        <S.TodoBody>
          <S.TodoBodyForm onSubmit={handleSubmit(onSubmitHandler)}>
            <S.TodoBodyFormInput
              {...register('todo')}
              type="text"
              name="todo"
              placeholder="What needs to be done?"
              error={errors.todo?.message}
              key={errors.todo?.message}
            />
            <S.TodoBodyFormActions>
              <S.TodoBodyFormAdd type="submit">+</S.TodoBodyFormAdd>
              <S.TodoBodyDropDown>&#9660;</S.TodoBodyDropDown>
            </S.TodoBodyFormActions>
          </S.TodoBodyForm>

          <S.TodoBodyList>
            {todos?.map((todo: ITodo) => (
              <Todo
                id={todo.id}
                key={todo.id}
                title={todo.title}
                date={todo.date}
                completed={todo.completed}
              />
            ))}
            {isCreateTodoLoading && <TodoLoader />}
            {isListTodoLoading && [...Array(5)].map((_, index) => <TodoLoader key={index} />)}
          </S.TodoBodyList>
        </S.TodoBody>
      </S.TodoSection>
    </S.HomeTemplate>
  );
}
