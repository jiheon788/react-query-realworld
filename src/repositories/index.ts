import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from '@/lib/Token';
import axios from 'axios';

const host = 'https://api.realworld.io/api';
const jwtToken = token.getToken(ACCESS_TOKEN_KEY);

export const customAxios = axios.create({
  baseURL: host,
  headers: {
    Authorization: jwtToken ? `Token ${jwtToken}` : '',
  },
});

/**
 * 디버깅 코드
 */
customAxios.interceptors.response.use(
  (response) => {
    console.log('response success: ', response);
    return response;
  },
  (error) => {
    console.log('response error: ', error);
    return Promise.reject(error);
  },
);
