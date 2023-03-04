import { NavLink } from 'react-router-dom';
import { useGetUserQuery } from '@/queries/user.query';

const ProfileItem = () => {
  const { data } = useGetUserQuery();

  return (
    <li className="nav-item">
      <NavLink
        to={`profile/${data.username}`}
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        state={data.username}
      >
        <img className="user-pic" src={data.image} alt="profile" />
        {data.username}
      </NavLink>
    </li>
  );
};

export default ProfileItem;
