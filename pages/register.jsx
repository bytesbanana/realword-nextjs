import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { API_BASE_URL } from 'lib/const';
import ErrorList from 'components/ErrorList';

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);
  const [disableForm, setDisableForm] = useState(false);

  const formSubmit = async (e) => {
    e.preventDefault();
    setDisableForm(true);
    const reqBody = {
      user: {
        username,
        email,
        password,
      },
    };
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (response.ok) {
        router.push('/');
        return;
      }
      setErrors(data.errors);
    } finally {
      setDisableForm(false);
    }
  };

  return (
    <>
      <div className='auth-page'>
        <div className='container page'>
          <div className='row'>
            <div className='col-md-6 offset-md-3 col-xs-12'>
              <h1 className='text-xs-center'>Sign up</h1>
              <p className='text-xs-center'>
                <Link href={'/login'}>
                  <a style={{ color: '#5CB85C' }}>Have an account?</a>
                </Link>
              </p>

              <ErrorList errors={errors} />

              <form onSubmit={formSubmit} noValidate>
                <fieldset className='form-group'>
                  <input
                    disabled={disableForm}
                    className='form-control form-control-lg invalid'
                    type='text'
                    placeholder='Username (Character or Number)'
                    pattern='[A-Za-z0-9]+'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    disabled={disableForm}
                    className='form-control form-control-lg'
                    type='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    disabled={disableForm}
                    className='form-control form-control-lg'
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </fieldset>
                <button
                  className='btn btn-lg btn-primary pull-xs-right'
                  type='submit'
                  disabled={disableForm}
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
