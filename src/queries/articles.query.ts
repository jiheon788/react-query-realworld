import { QUERY_ARTICLES_KEY } from '@/constants/query.constant';
import { getArticles } from '@/repositories/articles/ArticlesRepository';
import { useQuery } from '@tanstack/react-query';

export const useGetArticlesQuery = () =>
  useQuery({
    queryKey: [QUERY_ARTICLES_KEY],
    queryFn: () => getArticles({}).then((res) => res.data.articles),
  });
