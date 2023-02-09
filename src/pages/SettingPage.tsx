import SettingForm from '@/components/SettingForm';
import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from '@/lib/token';
import { useGetUserQuery } from '@/queries/user.query';
import { useNavigate } from 'react-router-dom';

const SettingPage = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    token.removeToken(ACCESS_TOKEN_KEY);
    navigate('/');
    window.location.reload();
  };

  const { data, isSuccess, status } = useGetUserQuery();

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            {isSuccess ? <SettingForm data={data} /> : <p className="text-xs-center">{status}</p>}

            <hr />
            <button type="button" className="btn btn-outline-danger" onClick={onLogout}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
