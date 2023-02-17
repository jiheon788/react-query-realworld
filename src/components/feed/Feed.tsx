import { convertToDate } from '@/lib/utils';
import { useFavoriteArticleMutation, useUnfavoriteArticleMutation } from '@/queries/articles.query';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContextProvider';
import routerMeta from '@/lib/routerMeta';
import queryClient from '@/lib/queryClient';
import { QUERY_ARTICLES_KEY } from '@/constants/query.constant';

interface IFeedProps {
  article: { [key: string]: any };
}

const Feed = ({ article }: IFeedProps) => {
  const { isLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const favoriteArticleMutation = useFavoriteArticleMutation();
  const unfavoriteArticleMutation = useUnfavoriteArticleMutation();

  const onToggleFavorite = () => {
    const { slug } = article;

    if (!isLogin) {
      navigate(routerMeta.SignInPage.path);
      return;
    }

    if (article.favorited) {
      unfavoriteArticleMutation.mutate(
        { slug },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_ARTICLES_KEY] });
          },
        },
      );
    }

    if (!article.favorited) {
      favoriteArticleMutation.mutate(
        { slug },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_ARTICLES_KEY] });
          },
        },
      );
      return;
    }
  };

  return (
    <div role="presentation" className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <img src={article.author.image} alt="profile" />
        </a>
        <div className="info">
          <Link to={`/profile/${article.author.username}`} state={article.author.username} className="author">
            {article.author.username}
          </Link>
          <span className="date">{convertToDate(article.createdAt)}</span>
        </div>
        <button
          type="button"
          className={`btn ${article.favorited ? 'btn-primary' : 'btn-outline-primary'} btn-sm pull-xs-right`}
          onClick={() => onToggleFavorite()}
        >
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <Link to={`/article/${article.slug}`} state={article.slug} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
};

export default Feed;
