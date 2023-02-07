import routerMeta, { IRouterMeta } from '@/lib/routerMeta';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            conduit
          </Link>
          <ul className="nav navbar-nav pull-xs-right">
            {Object.keys(routerMeta).map((componentKey: string, index: number) => {
              const menu: IRouterMeta = routerMeta[componentKey];

              if (menu.isShow)
                return (
                  <li className="nav-item" key={menu.path}>
                    <NavLink to={menu.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                      {menu.name}
                    </NavLink>
                  </li>
                );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
