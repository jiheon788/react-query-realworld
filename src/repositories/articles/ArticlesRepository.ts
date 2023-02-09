import CustomAxios from '@/lib/CustomAxios';
import { getArticlesParam } from './ArticlesRepository.param';

export const getArticles = async ({ query }: getArticlesParam) => {
  return await CustomAxios({
    method: 'get',
    url: `/articles${query}`,
  });
};
