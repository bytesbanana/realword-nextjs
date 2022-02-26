import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import UserAPI from 'lib/api/user';
import ErrorList from 'components/ErrorList';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState();
  const [isSubmiting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors(null);
    const body = {
      user: {
        email,
        password,
        username,
      },
    };

    try {
      const response = await UserAPI.register(username, email, password);
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('jwtToken', data.user.token);
        router.push({ pathname: '/' });
      } else {
        setErrors(data.errors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Sign up</h1>
            <p className='text-xs-center'>
              <Link href='/login'>
                <a>Have an account?</a>
              </Link>
            </p>

            {errors && <ErrorList errors={errors} />}

            <form onSubmit={submitHandler}>
              <fieldset className='form-group'>
                <input
                  className='form-control form-control-lg'
                  type='text'
                  placeholder='Your Name'
                  disabled={isSubmiting}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </fieldset>
              <fieldset className='form-group'>
                <input
                  className='form-control form-control-lg'
                  type='text'
                  placeholder='Email'
                  disabled={isSubmiting}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </fieldset>
              <fieldset className='form-group'>
                <input
                  className='form-control form-control-lg'
                  type='password'
                  placeholder='Password'
                  disabled={isSubmiting}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
              <button
                className='btn btn-lg btn-primary pull-xs-right'
                disabled={isSubmiting}
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
