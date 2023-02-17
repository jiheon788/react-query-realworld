import apiClient from '@/repositories/apiClient';

export const getTags = async () => {
  return await apiClient({
    method: 'get',
    url: `/tags`,
  });
};
