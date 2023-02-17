import { QUERY_USER_KEY } from '@/constants/query.constant';
import useInputs from '@/lib/hooks/useInputs';
import queryClient from '@/queries/queryClient';
import { usePutUserMutation } from '@/queries/user.query';
import { useNavigate } from 'react-router-dom';

interface ISettingFormProps {
  data: { [key: string]: string | number };
}

const SettingForm = ({ data }: ISettingFormProps) => {
  const navigate = useNavigate();
  const [userData, onChangeUserData] = useInputs({
    email: data.email,
    username: data.username,
    bio: data.bio,
    image: data.image,
    password: '',
  });

  const putUserMutation = usePutUserMutation();

  const onUpdateSetting = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    putUserMutation.mutate(
      { user: userData },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [QUERY_USER_KEY] });
          navigate('/');
        },
      },
    );
  };

  return (
    <>
      <form onSubmit={onUpdateSetting}>
        <fieldset>
          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="URL of profile picture"
              name="image"
              value={userData.image}
              onChange={onChangeUserData}
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Your Name"
              name="username"
              value={userData.username}
              onChange={onChangeUserData}
            />
          </fieldset>
          <fieldset className="form-group">
            <textarea
              className="form-control form-control-lg"
              rows={8}
              placeholder="Short bio about you"
              name="bio"
              value={userData.bio || ''}
              onChange={onChangeUserData}
            ></textarea>
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={onChangeUserData}
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="Password"
              autoComplete="off"
              name="password"
              value={userData.password}
              onChange={onChangeUserData}
            />
          </fieldset>
          <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
            Update Settings
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default SettingForm;
