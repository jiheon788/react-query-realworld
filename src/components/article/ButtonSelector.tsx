import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContextProvider';
import { useGetUserQuery } from '@/queries/user.query';
import ButtonsWIthAccess from './ButtonsWIthAccess';
import ButtonsWIthoutAccess from './ButtonsWIthoutAccess';

interface IButtonSelectorProps {
  articleInfo: { [key: string]: any };
}

const ButtonSelector = ({ articleInfo }: IButtonSelectorProps) => {
  const { isLogin } = useContext(UserContext);

  if (!isLogin) return <ButtonsWIthoutAccess articleInfo={articleInfo} />;

  const { data } = useGetUserQuery();

  return (
    <>
      {data.username === articleInfo.author.username ? (
        <ButtonsWIthAccess />
      ) : (
        <ButtonsWIthoutAccess articleInfo={articleInfo} />
      )}
    </>
  );
};

export default ButtonSelector;
