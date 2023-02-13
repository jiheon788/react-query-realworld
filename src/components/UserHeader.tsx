import { NavLink } from 'react-router-dom';
import { useGetUserQuery } from '@/queries/user.query';

const UserHeader = () => {
  const { data } = useGetUserQuery();

  return (
    <>
      <li className="nav-item">
        <NavLink to="/editor" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <i className="ion-compose"></i> New Article
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/settings" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
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

export default UserHeader;
