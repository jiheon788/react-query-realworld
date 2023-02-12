import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContextProvider';

const UserHeader = () => {
  const { userState } = useContext(UserContext);

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
        <NavLink
          to={`profile/${userState.username}`}
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          <img className="user-pic" src={userState.image} alt="profile" />
          {userState.username}
        </NavLink>
      </li>
    </>
  );
};

export default UserHeader;
