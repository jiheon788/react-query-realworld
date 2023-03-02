import { QUERY_ARTICLES_KEY, QUERY_PROFILE_KEY } from '@/constants/query.constant';
import { getArticles } from '@/repositories/articles/articlesRepository';
import { followUser, getProfile, unfollowUser } from '@/repositories/profiles/profileRepository';
import { useMutation, useQueries } from '@tanstack/react-query';

export const useGetProfileQueries = (username: string, query: string) => {
  return useQueries({
    queries: [
      {
        queryKey: [QUERY_PROFILE_KEY, username],
        queryFn: () => getProfile({ username }).then((res) => res.data.profile),
      },
      {
        queryKey: [QUERY_ARTICLES_KEY, query],
        queryFn: () => getArticles({ query }).then((res) => res.data),
      },
    ],
  });
};

export const useFollowUserMutation = () => useMutation(followUser);

export const useUnFollowUserMutation = () => useMutation(unfollowUser);
