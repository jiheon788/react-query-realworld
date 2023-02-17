import { QUERY_ARTICLES_KEY, QUERY_ARTICLE_KEY, QUERY_COMMENTS_KEY } from '@/constants/query.constant';
import {
  getArticle,
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
  getComments,
  createComment,
  deleteComment,
} from '@/repositories/articles/articlesRepository';
import { useMutation, useQueries, useQuery } from '@tanstack/react-query';

export const useGetArticlesQuery = (query: string) => {
  return useQuery({
    queryKey: [QUERY_ARTICLES_KEY, query],
    queryFn: () => getArticles({ query }).then((res) => res.data),
    keepPreviousData: true,
  });
};

export const useGetArticleQueries = (slug: string) => {
  return useQueries({
    queries: [
      {
        queryKey: [QUERY_ARTICLE_KEY, slug],
        queryFn: () => getArticle({ slug }).then((res) => res.data.article),
        staleTime: Infinity,
      },
      {
        queryKey: [QUERY_COMMENTS_KEY, slug],
        queryFn: () => getComments({ slug }).then((res) => res.data.comments),
        staleTime: Infinity,
      },
    ],
  });
};

export const useCreateArticleMutation = () => useMutation(createArticle);

export const useUpdateArticleMutation = () => useMutation(updateArticle);

export const useDeleteArticleMutation = () => useMutation(deleteArticle);

export const useCreateCommentMutation = () => useMutation(createComment);

export const useDeleteCommentMutation = () => useMutation(deleteComment);
