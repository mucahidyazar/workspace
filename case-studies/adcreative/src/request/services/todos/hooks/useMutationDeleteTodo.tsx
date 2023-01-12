import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { deleteTodo } from '../services';

export const useMutationDeleteTodo = (options: UseMutationOptions<unknown, Error, { id: string }>) =>
  useMutation(({ id }: { id: string }) => deleteTodo({ id }), { ...options });
