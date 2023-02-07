import { getArticles } from '@/repositories/articles/ArticlesRepository';
import { useEffect } from 'react';

const Feed = () => {
  useEffect(() => {
    getArticles({ limit: 10 });
  }, []);

  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <img src="http://i.imgur.com/Qr71crq.jpg" alt="profile" />
        </a>
        <div className="info">
          <a href="/" className="author">
            Eric Simons
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> 29
        </button>
      </div>
      <a href="/" className="preview-link">
        <h1>How to build webapps that scale</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
      </a>
    </div>
  );
};

export default Feed;
