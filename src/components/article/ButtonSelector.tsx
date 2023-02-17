import { useGetUserQuery } from '@/queries/user.query';
import ButtonsWIthAccess from './ButtonsWIthAccess';
import ButtonsWIthoutAccess from './ButtonsWIthoutAccess';

interface IButtonSelectorProps {
  articleInfo: { [key: string]: any };
}

const ButtonSelector = ({ articleInfo }: IButtonSelectorProps) => {
  const { data } = useGetUserQuery();

  return (
    <>
      {data.username === articleInfo.author.username ? (
        <ButtonsWIthAccess articleInfo={articleInfo} />
      ) : (
        <ButtonsWIthoutAccess articleInfo={articleInfo} />
      )}
    </>
  );
};

export default ButtonSelector;
