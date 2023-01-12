import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { detailTodo } from '../services';

export const useQueryDetailTodo = ({ id }: { id: string }, options: UseQueryOptions = {}) =>
  useQuery({
    queryKey: ['detailTodo', id],
    queryFn: () => detailTodo({ id }),
    ...options
  });
