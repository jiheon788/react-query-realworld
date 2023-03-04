import { IRouterMeta } from '@/lib/routerMeta';
import { NavLink } from 'react-router-dom';

interface INavItemProps {
  menu: IRouterMeta;
}

const NavItem = ({ menu }: INavItemProps) => {
  return (
    <li key={menu.path} className="nav-item">
      <NavLink to={menu.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
        <i className={menu.icon} /> {menu.name}
      </NavLink>
    </li>
  );
};

export default NavItem;
