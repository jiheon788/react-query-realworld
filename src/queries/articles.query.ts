import { QUERY_ARTICLES_KEY, QUERY_ARTICLE_KEY } from '@/constants/query.constant';
import {
  getArticle,
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} from '@/repositories/articles/articlesRepository';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetArticlesQuery = (query: string) => {
  return useQuery({
    queryKey: [QUERY_ARTICLES_KEY, query],
    queryFn: () => getArticles({ query }).then((res) => res.data.articles),
    keepPreviousData: true,
  });
};

export const useGetArticleQuery = (slug: string | any) => {
  return useQuery({
    queryKey: [QUERY_ARTICLE_KEY],
    queryFn: () => getArticle({ slug }).then((res) => res.data.article),
  });
};

export const useCreateArticleMutation = () => useMutation(createArticle);

export const useUpdateArticleMutation = () => useMutation(updateArticle);

export const useDeleteArticleMutation = () => useMutation(deleteArticle);
