import { QueryClient } from '@tanstack/react-query';

export const tanstackReactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 5
    }
  }
});
