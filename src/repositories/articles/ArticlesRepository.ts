import { customAxios } from '@/repositories';
import { getArticlesParam } from './ArticlesRepository.param';

export const getArticles = async ({ query }: getArticlesParam) => {
  return await customAxios({
    method: 'get',
    url: `/articles${query}`,
  });
};
