import { useGetProfileQuery } from '@/queries/profiles.query';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UNIT_PER_PAGE } from '@/constants/units.constants';
import Profile from '@/components/Profile';
import FeedList from '@/components/feed/FeedList';

const ProfilePage = () => {
  const { state } = useLocation();
  const [page, setPage] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);
  const [query, setQuery] = useState(`?limit=${UNIT_PER_PAGE}&offset=0&author=${state}`);

  const { data } = useGetProfileQuery(state);

  useEffect(() => {
    if (isFavorited) {
      setQuery(`?limit=${UNIT_PER_PAGE}&offset=0&favorited=${state}`);
    } else {
      setQuery(`?limit=${UNIT_PER_PAGE}&offset=0&author=${state}`);
    }
  }, [page, isFavorited]);

  return (
    <div className="profile-page">
      <Profile profile={data} />

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
              <Route path="/" element={<FeedList query={query} toUrl={'/'} page={page} setPage={setPage} />} />
              <Route path="/favorites" element={<FeedList query={query} toUrl={'/'} page={page} setPage={setPage} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
