import { customAxios } from '@/repositories';
import { getArticlesParam } from './ArticlesRepository.param';

export const getArticles = async ({ tag, author, favorited, limit, offset }: getArticlesParam) => {
  return await customAxios({
    method: 'get',
    url: `/articles`,
    params: {
      tag,
      author,
      favorited,
      limit,
      offset,
    },
  });
};
