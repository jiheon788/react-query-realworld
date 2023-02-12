import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from '@/lib/token';
import axios from 'axios';

const host = 'https://api.realworld.io/api';

const apiClient = axios.create({
  baseURL: host,
});

apiClient.interceptors.request.use((request: any) => {
  const jwtToken: string | null = token.getToken(ACCESS_TOKEN_KEY);
  if (jwtToken) {
    request.headers['Authorization'] = `Token ${jwtToken}`;
  }

  return request;
});

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
