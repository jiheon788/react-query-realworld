import { customAxios } from '@/repositories';

export const getArticles = async () => {
  return await customAxios({
    method: 'get',
    url: `/articles`,
  });
};
