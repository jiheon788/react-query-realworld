import apiClient from '@/lib/apiClient';

export const getTags = async () => {
  return await apiClient({
    method: 'get',
    url: `/tags`,
  });
};
