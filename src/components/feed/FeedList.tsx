import { UNIT_PER_PAGE } from '@/constants/units.constants';
import generateOneToNArray from '@/lib/utils/generateOneToNArray';
import scrollToTop from '@/lib/utils/scrollToTop';
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
            <Feed key={article.slug} article={article} />
          ))}
        </>
      ) : (
        <div>No articles are here... yet.</div>
      )}
      <nav>
        <ul className="pagination">
          {data.articlesCount > UNIT_PER_PAGE ? (
            generateOneToNArray(Math.floor(data.articlesCount / UNIT_PER_PAGE)).map((value) => (
              <li
                key={value}
                role="presentation"
                className={`page-item ${page === value ? 'active' : ''}`}
                onClick={() => {
                  setPage(value);
                  scrollToTop();
                }}
              >
                <NavLink to={toUrl} className="page-link">
                  {value}
                </NavLink>
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
      </nav>
    </>
  );
};

export default FeedList;
