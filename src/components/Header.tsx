import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import routerMeta, { IRouterMeta } from '@/lib/routerMeta';
import { Link, NavLink } from 'react-router-dom';
import token from '@/lib/Token';

const Header = () => {
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

          {Object.keys(routerMeta).map((componentKey: string, index: number) => {
            const menu: IRouterMeta = routerMeta[componentKey];

            if (menu.isShow && token.getToken(ACCESS_TOKEN_KEY) && menu.isAuth)
              return (
                <li className="nav-item" key={menu.path}>
                  <NavLink to={menu.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    {menu.icon ? <i className={menu.icon}></i> : <></>}
                    {menu.name}
                  </NavLink>
                </li>
              );

            if (menu.isShow && !token.getToken(ACCESS_TOKEN_KEY) && !menu.isAuth) {
              return (
                <li className="nav-item" key={menu.path}>
                  <NavLink to={menu.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    {menu.icon ? <i className={menu.icon}></i> : <></>}
                    {menu.name}
                  </NavLink>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
