import apiClient from '@/lib/apiClient';
import { getArticlesParam, getArticleParam, postArticleParam } from './articlesRepository.param';

export const getArticles = async ({ query }: getArticlesParam) => {
  return await apiClient({
    method: 'get',
    url: `/articles${query}`,
  });
};

export const getArticle = async ({ slug }: getArticleParam) => {
  return await apiClient({
    method: 'get',
    url: `/articles/${slug}`,
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
