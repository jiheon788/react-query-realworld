import { useGetProfileQueries } from '@/queries/profiles.query';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UNITS_PER_PAGE } from '@/constants/config.constants';
import Profile from '@/components/Profile';

const ProfilePage = () => {
  const { state } = useLocation();
  const [isMine, setIsMine] = useState(true);

  const [query, setQuery] = useState(`?limit=${UNITS_PER_PAGE}&offset=0&author=${state}`);

  const [profiles, articles] = useGetProfileQueries(state, query);

  console.log(profiles, articles);
  return (
    <div className="profile-page">
      <Profile profile={profiles.data} />

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${isMine ? 'active' : ''}`}
                    onClick={() => setIsMine(false)}
                    end
                    to={`/profile`}
                  >
                    My Articles
                  </NavLink>
                </li>
                <li className="nav-item">
                  <p
                    role="presentation"
                    className={`nav-link ${isMine ? '' : 'active'}`}
                    onClick={() => setIsMine(true)}
                  >
                    Favorited Articles
                  </p>
                </li>
              </ul>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <a href="/">
                  <img alt="author-profile" src="http://i.imgur.com/Qr71crq.jpg" />
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

            <div className="article-preview">
              <div className="article-meta">
                <a href="/">
                  <img alt="profile" src="http://i.imgur.com/N4VcUeJ.jpg" />
                </a>
                <div className="info">
                  <a href="/" className="author">
                    Albert Pai
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 32
                </button>
              </div>
              <a href="/" className="preview-link">
                <h1>The song you won`t ever stop singing. No matter how hard you try.</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">Music</li>
                  <li className="tag-default tag-pill tag-outline">Song</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
