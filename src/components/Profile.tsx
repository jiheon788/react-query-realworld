import { UserContext } from '@/contexts/UserContextProvider';
import { useContext } from 'react';
import FollowButton from './profile/FollowButton';

interface IProfileProps {
  profile: {
    image: string;
    username: string;
    bio: string;
    following: boolean;
  };
}

const Profile = ({ profile }: IProfileProps) => {
  const { isLogin } = useContext(UserContext);
  return (
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <img alt="profile" src={profile.image} className="user-img" />
            <h4>{profile.username}</h4>
            <p>{profile.bio}</p>
            {isLogin ? <FollowButton profileName={profile.username} isFollow={profile.following} /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
