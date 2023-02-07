import { getUser } from '@/repositories/users/usersRepository';
import { useQuery } from '@tanstack/react-query';

export const useGetUserQuery = () =>
  useQuery({
    queryKey: ['user'],
    queryFn: () => getUser().then((res) => res.data.user),
  });
