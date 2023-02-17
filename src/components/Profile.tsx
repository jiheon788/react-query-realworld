interface IProfileProps {
  profile: {
    image: string;
    username: string;
    bio: string;
    following: boolean;
  };
}

const Profile = ({ profile }: IProfileProps) => {
  return (
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <img alt="profile" src={profile.image} className="user-img" />
            <h4>{profile.username}</h4>
            <p>{profile.bio}</p>
            <button className={`btn btn-sm btn-outline-${profile.following ? 'primary' : 'secondary'} action-btn`}>
              <i className="ion-plus-round"></i>
              &nbsp; Follow {profile.username}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
