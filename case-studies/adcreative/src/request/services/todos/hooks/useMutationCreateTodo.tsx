import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { createTodo } from '../services';

export const useMutationCreateTodo = (options: UseMutationOptions<unknown, Error, { todo: string }>) =>
  useMutation(({ todo }: { todo: string }) => createTodo({ todo }), { ...options });
