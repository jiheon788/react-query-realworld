import { QueryClient, QueryCache } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any, query: any) => {
      console.log(error, query);
      if (query.state.data !== undefined) {
        alert(`error!!: ${error.message}`);
      }
    },
    onSuccess: (data) => {
      console.log(data);
    },
  }),
});
