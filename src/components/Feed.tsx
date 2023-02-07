import { convertToDate } from '@/lib/utils';
import { getArticles } from '@/repositories/articles/ArticlesRepository';
import { useEffect, useState } from 'react';

const Feed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles({ limit: 10 }).then((res) => {
      setArticles(res.data.articles);
    });
  }, []);

  return (
    <>
      {articles.map((article: any) => (
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
};

export default Feed;
