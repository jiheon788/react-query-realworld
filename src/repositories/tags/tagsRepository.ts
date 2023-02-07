import { customAxios } from '@/repositories';

export const getTags = async () => {
  return await customAxios({
    method: 'get',
    url: `/tags`,
  });
};
