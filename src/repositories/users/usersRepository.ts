import apiClient from '@/repositories/apiClient';
import { postLoginParam, postRegisterParam, putUserParam } from './usersRepository.param';

export const postLogin = async ({ email, password }: postLoginParam) => {
  return await apiClient({
    method: 'post',
    url: `/users/login`,
    data: {
      user: {
        email,
        password,
      },
    },
  });
};

export const postRegister = async ({ username, email, password }: postRegisterParam) => {
  return await apiClient({
    method: 'post',
    url: `/users`,
    data: {
      user: {
        username,
        email,
        password,
      },
    },
  });
};

export const getUser = async () => {
  return await apiClient({
    method: 'get',
    url: `/user`,
  });
};

export const putUser = async (data: { user: putUserParam }) => {
  return await apiClient({
    method: 'put',
    url: '/user',
    data,
  });
};
