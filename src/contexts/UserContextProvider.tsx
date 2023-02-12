import { createContext, useState } from 'react';

export const UserContext = createContext<any>({});

const UserContextProvider = ({ children }: any) => {
  const [userState, setUserState] = useState({});

  return <UserContext.Provider value={{ userState, setUserState }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
