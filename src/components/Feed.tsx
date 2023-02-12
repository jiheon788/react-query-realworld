import { QUERY_ARTICLES_KEY } from '@/constants/query.constant';
import { convertToDate } from '@/lib/utils';
import { useGetArticlesQuery } from '@/queries/articles.query';
import { useState, useEffect } from 'react';
import queryClient from '@/lib/queryClient';
import { Link, NavLink, useNavigate } from 'react-router-dom';

interface IFeedProps {
  url: string;
  selectedTag: string;
}

const Feed = ({ url, selectedTag }: IFeedProps) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(url + `?limit=10&offset=0`);

  const { data } = useGetArticlesQuery(query);

  // useEffect(() => {
  //   console.log(query);
  //   setQuery(url + `?limit=10&offset=0&tag=${selectedTag}`);
  //   queryClient.invalidateQueries({ queryKey: [QUERY_ARTICLES_KEY] });
  // }, [query]);

  return (
    <>
      {data.map((article: any) => (
        <div role="presentation" className="article-preview" key={article.title} onClick={() => console.log(article)}>
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
          <Link to={`/article/${article.slug}`} state={article.slug} className="preview-link">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <span>Read more...</span>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Feed;
