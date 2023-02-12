import { NavLink } from 'react-router-dom';

const NotUserHeader = () => {
  return (
    <>
      <li className="nav-item">
        <NavLink to="/login" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          Sign in
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/register" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          Sign up
        </NavLink>
      </li>
    </>
  );
};

export default NotUserHeader;
