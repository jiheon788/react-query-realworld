import CustomAxios from '@/lib/CustomAxios';

export const getTags = async () => {
  return await CustomAxios({
    method: 'get',
    url: `/tags`,
  });
};
