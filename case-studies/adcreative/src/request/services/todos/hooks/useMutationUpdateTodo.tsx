import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { ITodo } from '@/mocks';

import { updateTodo } from '../services';

export const useMutationUpdateTodo = (options: UseMutationOptions<ITodo, Error, { id: string; todo: Partial<ITodo> }>) =>
  useMutation(({ id, todo }: { id: string; todo: Partial<ITodo> }) => updateTodo({ id, todo }), {
    ...options
  });
