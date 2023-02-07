import { customAxios } from '@/repositories';
import { postLoginParam, postRegisterParam } from './usersRepository.param';

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
