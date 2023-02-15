import routerMeta from '@/lib/routerMeta';
import { Link, NavLink } from 'react-router-dom';
import HeaderWithAccess from './HeaderWithAccess';
import HeaderWithoutAccess from './HeaderWithoutAccess';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContextProvider';

const Header = () => {
  const { isLogin } = useContext(UserContext);

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

          {isLogin ? <HeaderWithAccess /> : <HeaderWithoutAccess />}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
