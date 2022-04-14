import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import ErrorList from 'components/ErrorList';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState();

  const formSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    });
    const data = await response.json();
    if (response.ok) {
      router.push('/');
      return;
    }

    setErrors(data.errors);
  };

  return (
    <>
      <div className='auth-page'>
        <div className='container page'>
          <div className='row'>
            <div className='col-md-6 offset-md-3 col-xs-12'>
              <h1 className='text-xs-center'>Sign in</h1>
              <p className='text-xs-center'>
                <Link href={'/register'}>
                  <a style={{ color: '#5CB85C' }}>Need an account?</a>
                </Link>
              </p>

              <ErrorList errors={errors} />

              <form onSubmit={formSubmit}>
                <fieldset className='form-group'>
                  <input
                    className='form-control form-control-lg'
                    type='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    className='form-control form-control-lg'
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </fieldset>
                <button
                  type='submit'
                  className='btn btn-lg btn-primary pull-xs-right'
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
