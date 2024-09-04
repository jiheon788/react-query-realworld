import { useGetProfileQueries } from '@/queries/profiles.query';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Profile from '@/components/Profile';
import FeedList from '@/components/feed/FeedList';

const ProfilePage = () => {
  const { state } = useLocation();
  const [page, setPage] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);
  const [profileInfo, articlesInfo] = useGetProfileQueries(state, page, isFavorited);

  console.log(state);

  return (
    <div className="profile-page">
      <Profile profile={profileInfo.data} />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    end
                    to={`/profile/${state}`}
                    onClick={() => setIsFavorited(false)}
                    state={state}
                  >
                    My Articles
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    end
                    to={`/profile/${state}/favorites`}
                    onClick={() => setIsFavorited(true)}
                    state={state}
                  >
                    Favorited Articles
                  </NavLink>
                </li>
              </ul>
            </div>

            <Routes>
              <Route path="/" element={<FeedList articlesInfo={articlesInfo.data} page={page} setPage={setPage} />} />
              <Route
                path="/favorites"
                element={<FeedList articlesInfo={articlesInfo.data} page={page} setPage={setPage} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
