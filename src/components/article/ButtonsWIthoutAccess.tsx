import { useFavoriteArticleMutation, useUnfavoriteArticleMutation } from '@/queries/articles.query';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContextProvider';
import routerMeta from '@/lib/routerMeta';
import queryClient from '@/lib/queryClient';
import { QUERY_ARTICLE_KEY } from '@/constants/query.constant';

interface IButtonsWIthoutAccessProps {
  articleInfo: { [key: string]: any };
}

const ButtonsWIthoutAccess = ({ articleInfo }: IButtonsWIthoutAccessProps) => {
  const { isLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const favoriteArticleMutation = useFavoriteArticleMutation();
  const unfavoriteArticleMutation = useUnfavoriteArticleMutation();

  const onToggleFavorite = () => {
    const { slug } = articleInfo;

    if (!isLogin) {
      navigate(routerMeta.SignInPage.path);
      return;
    }

    if (articleInfo.favorited) {
      unfavoriteArticleMutation.mutate(
        { slug },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_ARTICLE_KEY] });
          },
        },
      );
      return;
    }

    if (!articleInfo.favorited) {
      favoriteArticleMutation.mutate(
        { slug },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_ARTICLE_KEY] });
          },
        },
      );
      return;
    }
  };

  return (
    <>
      <button className={`btn btn-sm btn-outline-${articleInfo.author.following ? 'primary' : 'secondary'}`}>
        <i className="ion-plus-round"></i>
        &nbsp; Follow {articleInfo.author.username} <span className="counter">(10)</span>
      </button>
      &nbsp;&nbsp;
      <button
        className={`btn btn-sm btn-outline-${articleInfo.favorited ? 'primary' : 'secondary'}`}
        onClick={() => onToggleFavorite()}
      >
        <i className="ion-heart"></i>
        &nbsp; Favorite Post <span className="counter">{articleInfo.favoritesCount}</span>
      </button>
    </>
  );
};

export default ButtonsWIthoutAccess;
