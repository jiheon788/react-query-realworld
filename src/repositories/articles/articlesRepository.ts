import apiClient from '@/lib/apiClient';
import {
  getArticlesParam,
  getArticleParam,
  createArticleParam,
  updateArticleParam,
  deleteArticleParam,
  getCommentsParam,
  createCommentParam,
  deleteCommentParam,
  favoriteParam,
} from './articlesRepository.param';

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

export const deleteArticle = async ({ slug }: deleteArticleParam) => {
  return await apiClient({
    method: 'delete',
    url: `/articles/${slug}`,
  });
};

export const getComments = async ({ slug }: getCommentsParam) => {
  return await apiClient({
    method: 'get',
    url: `/articles/${slug}/comments`,
  });
};

export const createComment = async ({ slug, body }: createCommentParam) => {
  return await apiClient({
    method: 'post',
    url: `/articles/${slug}/comments`,
    data: {
      comment: {
        body,
      },
    },
  });
};

export const deleteComment = async ({ slug, id }: deleteCommentParam) => {
  return await apiClient({
    method: 'delete',
    url: `/articles/${slug}/comments/${id}`,
  });
};

export const favoriteArticle = async ({ slug }: favoriteParam) => {
  return await apiClient({
    method: 'post',
    url: `/articles/${slug}/favorite`,
  });
};

export const unfavoriteArticle = async ({ slug }: favoriteParam) => {
  return await apiClient({
    method: 'delete',
    url: `/articles/${slug}/favorite`,
  });
};
