import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from '@/lib/token';
import { useState } from 'react';

const useIsLoginContext = () => {
  const [isLogin, setIsLogin] = useState(!!token.getToken(ACCESS_TOKEN_KEY));

  return {
    isLogin,
    setIsLogin,
  };
};

export default useIsLoginContext;
