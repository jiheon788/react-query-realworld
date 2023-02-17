import { QUERY_ARTICLES_KEY, QUERY_PROFILE_KEY, QUERY_USER_KEY } from '@/constants/query.constant';
import { getArticles } from '@/repositories/articles/articlesRepository';
import { followUser, getProfile, unfollowUser } from '@/repositories/profiles/profileRepository';
import { getUser } from '@/repositories/users/usersRepository';
import { useMutation, useQueries, useQuery } from '@tanstack/react-query';

export const useGetProfileQueries = (username: string, query: string) => {
  return useQueries({
    queries: [
      {
        queryKey: [QUERY_PROFILE_KEY, username],
        queryFn: () => getProfile({ username }).then((res) => res.data.profile),
        staleTime: Infinity,
      },
      {
        queryKey: [QUERY_ARTICLES_KEY, query],
        queryFn: () => getArticles({ query }).then((res) => res.data),
        staleTime: Infinity,
        keepPreviousData: true,
      },
    ],
  });
};

export const useFollowUserMutation = () => useMutation(followUser);

export const useUnFollowUserMutation = () => useMutation(unfollowUser);
