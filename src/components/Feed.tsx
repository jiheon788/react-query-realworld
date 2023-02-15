import { convertToDate } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface IFeedProps {
  article: { [key: string]: any };
}

const Feed = ({ article }: IFeedProps) => {
  return (
    <div role="presentation" className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <img src={article.author.image} alt="profile" />
        </a>
        <div className="info">
          <a href="/" className="author">
            {article.author.username}
          </a>
          <span className="date">{convertToDate(article.createdAt)}</span>
        </div>
        <button className={`btn ${article.favorited ? 'btn-primary' : 'btn-outline-primary'} btn-sm pull-xs-right`}>
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
