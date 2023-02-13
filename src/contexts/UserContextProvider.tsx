import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from '@/lib/token';
import { createContext, useState } from 'react';

export const UserContext = createContext<any>(false);

const UserContextProvider = ({ children }: any) => {
  const [isLogin, setIsLogin] = useState(!!token.getToken(ACCESS_TOKEN_KEY));

  return <UserContext.Provider value={{ isLogin, setIsLogin }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
