import axios from 'axios';

const host = 'https://api.realworld.io/api';

export const customAxios = axios.create({
  baseURL: host,
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
