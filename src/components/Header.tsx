import routerMeta from '@/lib/routerMeta';
import { Link, NavLink } from 'react-router-dom';
import UserHeader from './UserHeader';
import NotUserHeader from './NotUserHeader';
import { useContext } from 'react';
import { isEmptyObj } from '@/lib/utils';
import { UserContext } from '@/contexts/UserContextProvider';

const Header = () => {
  const { userState } = useContext(UserContext);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to={routerMeta.HomePage.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {routerMeta.HomePage.name}
            </NavLink>
          </li>

          {isEmptyObj(userState) ? <NotUserHeader /> : <UserHeader />}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
