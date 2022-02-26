import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import UserAPI from 'lib/api/user';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { appActions } from '../store/app';
import { authActions } from '../store/auth';
import ErrorList from 'components/ErrorList';

const Login = () => {
  const router = useRouter();
  const [errors, setErrors] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loading = useSelector((state) => state.app.loading);

  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(appActions.showLoading());

    const response = await UserAPI.login(email, password);
    const data = await response.json();

    dispatch(appActions.hideLoading());
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(data.user));
      dispatch(authActions.setUser(data.user));
      router.push('/');
    } else {
      setErrors(data.errors);
    }
  };

  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Sign in</h1>
            <p className='text-xs-center'>
              <Link href='/register'>
                <a>Or create new account</a>
              </Link>
            </p>
            {errors && <ErrorList errors={errors} />}

            <form onSubmit={loginHandler}>
              <fieldset className='form-group'>
                <input
                  className='form-control form-control-lg'
                  type='text'
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </fieldset>
              <fieldset className='form-group'>
                <input
                  className='form-control form-control-lg'
                  type='password'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </fieldset>
              <button
                className='btn btn-lg btn-primary pull-xs-right'
                disabled={loading}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
