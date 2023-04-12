import { useGetUserQuery } from '@/queries/user.query';
import ButtonsWIthAccess from './ButtonsWIthAccess';
import ButtonsWIthoutAccess from './ButtonsWIthoutAccess';
import { IArticle } from '@/interfaces/main';

interface IButtonSelectorProps {
  articleInfo: IArticle;
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
