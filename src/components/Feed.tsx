import { convertToDate } from '@/lib/utils';
import { useGetArticlesQuery } from '@/queries/articles.query';

const Feed = () => {
  const { data, isSuccess, status } = useGetArticlesQuery();

  if (isSuccess) {
    return (
      <>
        {data.map((article: any) => (
          <div className="article-preview" key={article.title}>
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
              <button className="btn btn-outline-primary btn-sm pull-xs-right">
                <i className="ion-heart"></i> {article.favoritesCount}
              </button>
            </div>
            <a href="/" className="preview-link">
              <h1>{article.title}</h1>
              <p>{article.description}</p>
              <span>Read more...</span>
            </a>
          </div>
        ))}
      </>
    );
  }

  return <p className="text-xs-center">{status}</p>;
};

export default Feed;
