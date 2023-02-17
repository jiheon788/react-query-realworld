import apiClient from '@/lib/apiClient';
import { profileParam } from './profileRepository.param';

export const getProfile = async ({ username }: profileParam) => {
  return await apiClient({
    method: 'get',
    url: `/profiles/${username}`,
  });
};

export const followUser = async ({ username }: profileParam) => {
  return await apiClient({
    method: 'get',
    url: `/profiles/${username}/follow`,
  });
};

export const unfollowUser = async ({ username }: profileParam) => {
  return await apiClient({
    method: 'get',
    url: `/profiles/${username}/follow`,
  });
};
