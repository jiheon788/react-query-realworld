import Feed from '@/components/Feed';
import { getTags } from '@/repositories/tags/tagsRepository';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetArticlesQuery } from '@/queries/articles.query';

const HomePage = () => {
  const [isGlobal, setIsGlobal] = useState(true);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [query, setQuery] = useState(`?limit=10&offset=0`);
  const { data } = useGetArticlesQuery(query);

  useEffect(() => {
    getTags().then((res) => {
      setTags(res.data.tags);
    });
  }, []);

  useEffect(() => {
    setQuery(`${isGlobal ? '' : '/feed'}?limit=10&offset=0${selectedTag ? `&tag=${selectedTag}` : ''}`);
  }, [isGlobal, selectedTag]);

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
            {data.map((article: any) => (
              <Feed key={article.title} article={article} />
            ))}
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
