import { useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { BsTrash } from 'react-icons/bs';

import { ITodo } from '@/mocks';
import { useMutationDeleteTodo, useMutationUpdateTodo } from '@/request/services';

import { Checkbox } from '../Checkbox';

import * as S from './style';
import { TodoLoader } from './TodoLoader';

export const Todo = ({ id, title, date, completed }: ITodo) => {
  const queryClient = useQueryClient();

  const { mutate: mutateUpdateTodo, isLoading: isUpdateTodoLoading } = useMutationUpdateTodo({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['listTodo'] });
    }
  });

  const { mutate: mutateDeleteTodo, isLoading: isDeleteTodoLoading } = useMutationDeleteTodo({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['listTodo'] });
    }
  });

  const changeHandler = (changedValue: boolean) => {
    mutateUpdateTodo({
      id,
      todo: { completed: changedValue }
    });
  };

  const deleteHandler = () => {
    mutateDeleteTodo({ id });
  };

  if (isUpdateTodoLoading || isDeleteTodoLoading) {
    return <TodoLoader />;
  }

  return (
    <S.Todo>
      <S.TodoContent>
        <S.TodoTitle>{title}</S.TodoTitle>
        <S.TodoDate>{format(new Date(date as string), 'EEE d, p')}</S.TodoDate>
      </S.TodoContent>
      <S.TodoActions>
        <Checkbox checked={completed} onChange={changeHandler} />
        <BsTrash fontSize={20} color="var(--primary)" onClick={deleteHandler} />
      </S.TodoActions>
    </S.Todo>
  );
};
