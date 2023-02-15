import routerMeta from '@/lib/routerMeta';
import { NavLink } from 'react-router-dom';

const HeaderWithoutAccess = () => {
  return (
    <>
      <li className="nav-item">
        <NavLink to={routerMeta.SignInPage.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          Sign in
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={routerMeta.SignUpPage.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          Sign up
        </NavLink>
      </li>
    </>
  );
};

export default HeaderWithoutAccess;
