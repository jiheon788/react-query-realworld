import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import useInputs from '@/lib/hooks/useInputs';
import routerMeta from '@/lib/routerMeta';
import token from '@/lib/token';
import { postLogin } from '@/repositories/users/usersRepository';
import { Link, useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [signIndata, onChangeSignInData] = useInputs({ email: '', password: '' });
  const navigate = useNavigate();

  const onLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postLogin({ user: signIndata })
      .then((res) => {
        token.setToken(ACCESS_TOKEN_KEY, res.data.user.token);
        navigate('/');
        window.location.reload();
      })
      .catch((err) => {
        alert(JSON.stringify(err.response.data.errors || 'error'));
      });
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to={routerMeta.SignUpPage.path}>Not registered?</Link>
            </p>

            {/* <ul className="error-messages">
            <li>That email is already taken</li>
          </ul> */}

            <form onSubmit={onLogin}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={signIndata.email}
                  onChange={onChangeSignInData}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={signIndata.password}
                  onChange={onChangeSignInData}
                />
              </fieldset>
              <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
