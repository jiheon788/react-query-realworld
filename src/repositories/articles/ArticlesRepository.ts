import apiClient from '@/lib/apiClient';
import { getArticlesParam, postArticleParam } from './ArticlesRepository.param';

export const getArticles = async ({ query }: getArticlesParam) => {
  return await apiClient({
    method: 'get',
    url: `/articles${query}`,
  });
};

export const postArticle = async ({ title, description, body, tagList }: postArticleParam) => {
  return await apiClient({
    method: 'post',
    url: `/articles`,
    data: {
      article: {
        title,
        description,
        body,
        tagList,
      },
    },
  });
};
