import { UNITS_PER_PAGE } from '@/constants/config.constants';
import { scrollToTop } from '@/lib/utils';
import { useGetArticlesQuery } from '@/queries/articles.query';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Feed from '../Feed';

interface IFeedListProps {
  query: string;
  toUrl: string;
}

const FeedList = ({ query, toUrl }: IFeedListProps) => {
  const [page, setPage] = useState(1);

  const { data } = useGetArticlesQuery(query);

  return (
    <>
      {data.articles.length !== 0 ? (
        <>
          {data.articles.map((article: any) => (
            <Feed key={article.title} article={article} />
          ))}
        </>
      ) : (
        <div>No articles are here... yet.</div>
      )}
      <nav>
        <ul className="pagination">
          {data.articlesCount > UNITS_PER_PAGE ? (
            Array.from({ length: Number((data.articlesCount / UNITS_PER_PAGE).toFixed()) }, (_, i) => i + 1).map(
              (index) => (
                <li
                  key={index}
                  role="presentation"
                  className={`page-item ${page === index ? 'active' : ''}`}
                  onClick={() => {
                    setPage(index);
                    scrollToTop();
                  }}
                >
                  <NavLink to={toUrl} className="page-link">
                    {index}
                  </NavLink>
                </li>
              ),
            )
          ) : (
            <></>
          )}
        </ul>
      </nav>
    </>
  );
};

export default FeedList;
