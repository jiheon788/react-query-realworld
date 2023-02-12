import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from '@/lib/token';
import axios from 'axios';

const host = 'https://api.realworld.io/api';
const jwtToken = token.getToken(ACCESS_TOKEN_KEY);

const apiClient = axios.create({
  baseURL: host,
  headers: {
    Authorization: jwtToken ? `Token ${jwtToken}` : '',
  },
});

/**
 * 디버깅 코드
 */
apiClient.interceptors.response.use(
  (response) => {
    console.log('response success: ', response);
    return response;
  },
  (error) => {
    console.log('response error: ', error);
    return Promise.reject(error);
  },
);

export default apiClient;
