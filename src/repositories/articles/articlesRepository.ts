import apiClient from '@/lib/apiClient';
import { getArticlesParam, getArticleParam, createArticleParam, updateArticleParam } from './articlesRepository.param';

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

export const createArticle = async ({ title, description, body, tagList }: createArticleParam) => {
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

export const updateArticle = async ({ slug, title, description, body, tagList }: updateArticleParam) => {
  return await apiClient({
    method: 'put',
    url: `/articles/${slug}`,
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
