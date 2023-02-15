import { NavLink } from 'react-router-dom';
import { useGetUserQuery } from '@/queries/user.query';
import routerMeta from '@/lib/routerMeta';

const HeaderWithAccess = () => {
  const { data } = useGetUserQuery();

  return (
    <>
      <li className="nav-item">
        <NavLink
          to={routerMeta.NewArticlePage.path}
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          <i className="ion-compose"></i> New Article
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={routerMeta.SettingPage.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <i className="ion-gear-a"></i> Settings
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={`profile/${data.username}`} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <img className="user-pic" src={data.image} alt="profile" />
          {data.username}
        </NavLink>
      </li>
    </>
  );
};

export default HeaderWithAccess;
