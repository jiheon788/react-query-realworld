import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from '@/lib/token';
import { createContext, useState } from 'react';

interface IUserContextProviderProps {
  children: JSX.Element[];
}

export const UserContext = createContext<any>(false);

const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  const [isLogin, setIsLogin] = useState(!!token.getToken(ACCESS_TOKEN_KEY));

  return <UserContext.Provider value={{ isLogin, setIsLogin }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
