import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from '@/lib/token';
import { createContext, useState } from 'react';

interface IUserContextProviderProps {
  children: JSX.Element[];
}

const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState(!!token.getToken(ACCESS_TOKEN_KEY));

  return {
    isLogin,
    setIsLogin,
  };
};

export const UserContext = createContext({} as ReturnType<typeof useIsLogin>);

const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  return <UserContext.Provider value={useIsLogin()}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
