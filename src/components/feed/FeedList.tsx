import { UNIT_PER_PAGE } from '@/constants/units.constants';
import { scrollToTop } from '@/lib/utils';
import { useGetArticlesQuery } from '@/queries/articles.query';
import { NavLink } from 'react-router-dom';
import Feed from './Feed';

interface IFeedListProps {
  query: string;
  toUrl: string;
  page: number;
  setPage: (page: number) => void;
}

const FeedList = ({ query, toUrl, page, setPage }: IFeedListProps) => {
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
          {data.articlesCount > UNIT_PER_PAGE ? (
            Array.from({ length: Number((data.articlesCount / UNIT_PER_PAGE).toFixed()) }, (_, i) => i + 1).map(
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
