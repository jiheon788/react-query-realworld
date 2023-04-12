import apiClient from '@/repositories/apiClient';
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
import { UNIT_PER_PAGE } from '@/constants/units.constants';

export const getArticles = async ({ isGlobal, selectedTag, page, username, isFavorited }: getArticlesParam) => {
  return await apiClient({
    method: 'get',
    url: `/articles${isGlobal || username ? '' : '/feed'}?limit=${UNIT_PER_PAGE}&offset=${UNIT_PER_PAGE * (page - 1)}${
      selectedTag ? `&tag=${selectedTag}` : ''
    }${username ? `&${isFavorited ? 'favorited' : 'author'}=${username}` : ''}`,
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
