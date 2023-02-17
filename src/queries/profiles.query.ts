import { QUERY_PROFILE_KEY, QUERY_USER_KEY } from '@/constants/query.constant';
import { followUser, getProfile, unfollowUser } from '@/repositories/profiles/profileRepository';
import { getUser } from '@/repositories/users/usersRepository';
import { useMutation, useQueries, useQuery } from '@tanstack/react-query';

export const useGetProfileQuery = (username: string) => {
  return useQuery({
    queryKey: [QUERY_PROFILE_KEY, username],
    queryFn: () => getProfile({ username }).then((res) => res.data.profile),
  });
};

export const useFollowUserMutation = () => useMutation(followUser);

export const useUnFollowUserMutation = () => useMutation(unfollowUser);
