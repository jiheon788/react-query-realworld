import { getArticles } from '@/repositories/articles/ArticlesRepository';
import { useQuery } from '@tanstack/react-query';

export const useGetArticlesQuery = () =>
  useQuery({
    queryKey: ['getArticles'],
    queryFn: () => getArticles({}).then((res) => res.data.articles),
  });
