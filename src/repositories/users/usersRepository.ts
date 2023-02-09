import CustomAxios from '@/lib/CustomAxios';
import { postLoginParam, postRegisterParam, putUserParam } from './usersRepository.param';

export const postLogin = async (data: { user: postLoginParam }) => {
  return await CustomAxios({
    method: 'post',
    url: `/users/login`,
    data,
  });
};

export const postRegister = async (data: { user: postRegisterParam }) => {
  return await CustomAxios({
    method: 'post',
    url: `/users`,
    data,
  });
};

export const getUser = async () => {
  return await CustomAxios({
    method: 'get',
    url: `/user`,
  });
};

export const putUser = async (data: { user: putUserParam }) => {
  return await CustomAxios({
    method: 'put',
    url: '/user',
    data,
  });
};
