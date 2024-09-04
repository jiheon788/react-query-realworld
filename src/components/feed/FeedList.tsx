import { UNIT_PER_PAGE } from '@/constants/units.constants';
import generateOneToNArray from '@/lib/utils/generateOneToNArray';
import scrollToTop from '@/lib/utils/scrollToTop';
import Feed from './Feed';
import { IArticle } from '@/interfaces/main';

interface IFeedListProps {
  articlesInfo: {
    articles: IArticle[];
    articlesCount: number;
  };
  page: number;
  setPage: (page: number) => void;
}

const FeedList = ({ articlesInfo, page, setPage }: IFeedListProps) => {
  const { articles, articlesCount } = articlesInfo;

  return (
    <>
      {articles.length !== 0 ? (
        <>
          {articles.map((article) => (
            <Feed key={article.slug} article={article} />
          ))}
        </>
      ) : (
        <div>No articles are here... yet.</div>
      )}
      <nav>
        <ul className="pagination">
          {articlesCount > UNIT_PER_PAGE &&
            generateOneToNArray(Math.floor(articlesCount / UNIT_PER_PAGE)).map((value) => (
              <li
                key={value}
                role="presentation"
                className={`page-item ${page === value ? 'active' : ''}`}
                onClick={() => {
                  setPage(value);
                  scrollToTop();
                }}
              >
                <div className="page-link">{value}</div>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
};

export default FeedList;
