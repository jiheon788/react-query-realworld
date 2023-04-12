import { useFavoriteArticleMutation, useUnfavoriteArticleMutation } from '@/queries/articles.query';
import { useFollowUserMutation, useUnFollowUserMutation } from '@/queries/profiles.query';
import queryClient from '@/queries/queryClient';
import { QUERY_ARTICLE_KEY } from '@/constants/query.constant';
import { IArticle } from '@/interfaces/main';

interface IButtonsWIthoutAccessProps {
  articleInfo: IArticle;
}

const ButtonsWIthoutAccess = ({ articleInfo }: IButtonsWIthoutAccessProps) => {
  const favoriteArticleMutation = useFavoriteArticleMutation();
  const unfavoriteArticleMutation = useUnfavoriteArticleMutation();
  const followUserMutation = useFollowUserMutation();
  const unfollowUserMutation = useUnFollowUserMutation();

  const onToggleFavorite = () => {
    const { slug } = articleInfo;

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

  const onToggleFollow = () => {
    const { username, following } = articleInfo.author;

    if (following) {
      unfollowUserMutation.mutate(
        { username },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_ARTICLE_KEY] });
          },
        },
      );
      return;
    }
    if (!following) {
      followUserMutation.mutate(
        { username },
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
      <button
        type="button"
        className={`btn btn-sm btn-outline-${articleInfo.author.following ? 'primary' : 'secondary'}`}
        onClick={() => onToggleFollow()}
      >
        <i className="ion-plus-round"></i>
        &nbsp; Follow {articleInfo.author.username} <span className="counter">(10)</span>
      </button>
      &nbsp;&nbsp;
      <button
        type="button"
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
