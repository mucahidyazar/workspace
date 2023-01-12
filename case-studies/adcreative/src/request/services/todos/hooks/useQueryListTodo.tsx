import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { listTodo } from '../services';

export const useQueryListTodo = (options: UseQueryOptions = {}): any =>
  useQuery({
    queryKey: ['listTodo'],
    queryFn: () => listTodo(),
    ...options
  });
