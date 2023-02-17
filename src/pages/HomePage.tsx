import Feed from '@/components/feed/Feed';
import { getTags } from '@/repositories/tags/tagsRepository';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useGetArticlesQuery } from '@/queries/articles.query';
import { scrollToTop } from '@/lib/utils';
import { UNITS_PER_PAGE } from '@/constants/config.constants';
import FeedList from '@/components/feed/FeedList';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [isGlobal, setIsGlobal] = useState(true);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [query, setQuery] = useState(`?limit=${UNITS_PER_PAGE}&offset=0`);

  useEffect(() => {
    getTags().then((res) => {
      setTags(res.data.tags);
    });
  }, []);

  useEffect(() => {
    if (isGlobal) {
      setQuery(
        `?limit=${UNITS_PER_PAGE}&offset=${UNITS_PER_PAGE * (page - 1)}${selectedTag ? `&tag=${selectedTag}` : ''}`,
      );
    } else {
      setQuery(`/feed?limit=${UNITS_PER_PAGE}&offset=${UNITS_PER_PAGE * (page - 1)}`);
    }
  }, [isGlobal, selectedTag, page]);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <Link className={`nav-link ${isGlobal ? '' : 'active'}`} to="/" onClick={() => setIsGlobal(false)}>
                    Your Feed
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${isGlobal ? 'active' : ''}`} to="/" onClick={() => setIsGlobal(true)}>
                    Global Feed
                  </Link>
                </li>
              </ul>
            </div>
            <FeedList query={query} toUrl={'/'} page={page} setPage={setPage} />
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                {tags.map((tag: string) => (
                  <Link
                    to="/"
                    key={tag}
                    className="tag-pill tag-default"
                    onClick={() => {
                      setSelectedTag(tag);
                    }}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
