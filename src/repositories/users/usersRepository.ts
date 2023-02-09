import { customAxios } from '@/repositories';
import { postLoginParam, postRegisterParam, putUserParam } from './usersRepository.param';

export const postLogin = async (data: { user: postLoginParam }) => {
  return await customAxios({
    method: 'post',
    url: `/users/login`,
    data,
  });
};

export const postRegister = async (data: { user: postRegisterParam }) => {
  return await customAxios({
    method: 'post',
    url: `/users`,
    data,
  });
};

export const getUser = async () => {
  return await customAxios({
    method: 'get',
    url: `/user`,
  });
};

export const putUser = async (data: { user: putUserParam }) => {
  return await customAxios({
    method: 'put',
    url: '/user',
    data,
  });
};
