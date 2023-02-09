import { QUERY_ARTICLES_KEY } from '@/constants/query.constant';
import { getArticles } from '@/repositories/articles/ArticlesRepository';
import { useQuery } from '@tanstack/react-query';

interface IParams {
  tag: string;
  author: string;
  favorited: string;
  limit: number;
  offset: number;
}

export const useGetArticlesQuery = (query: string) => {
  return useQuery({
    queryKey: [QUERY_ARTICLES_KEY],
    queryFn: () => getArticles({ query }).then((res) => res.data.articles),
  });
};
