import { QUERY_ARTICLES_KEY, QUERY_ARTICLE_KEY } from '@/constants/query.constant';
import { getArticle, getArticles, postArticle } from '@/repositories/articles/articlesRepository';
import { useMutation, useQuery } from '@tanstack/react-query';

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

export const useGetArticleQuery = (slug: string | any) => {
  return useQuery({
    queryKey: [QUERY_ARTICLE_KEY],
    queryFn: () => getArticle({ slug }).then((res) => res.data.article),
  });
};

export const usePostArticleMutation = () => useMutation(postArticle);
