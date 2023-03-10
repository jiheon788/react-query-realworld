import { QUERY_USER_KEY } from '@/constants/query.constant';
import { getUser, putUser } from '@/repositories/users/usersRepository';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetUserQuery = () =>
  useQuery({
    queryKey: [QUERY_USER_KEY],
    queryFn: () => getUser().then((res) => res.data.user),
    retry: false,
  });

export const usePutUserMutation = () => useMutation(putUser);
