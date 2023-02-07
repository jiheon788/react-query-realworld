import Feed from '@/components/Feed';
import useBoolean from '@/lib/hooks/useBoolean';
import { getArticles } from '@/repositories/articles/ArticlesRepository';
import { getTags } from '@/repositories/tags/tagsRepository';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isGlobal, onToggleIsGlobal] = useBoolean(true);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags().then((res) => {
      setTags(res.data.tags);
    });
  }, []);

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
                  <Link className={`nav-link ${isGlobal ? '' : 'active'}`} to="/" onClick={onToggleIsGlobal}>
                    Your Feed
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${isGlobal ? 'active' : ''}`} to="/" onClick={onToggleIsGlobal}>
                    Global Feed
                  </Link>
                </li>
              </ul>
            </div>
            <Feed />
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                {tags.map((tag: string) => (
                  <Link to="/" key={tag} className="tag-pill tag-default">
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
