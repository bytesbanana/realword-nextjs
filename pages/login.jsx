import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { data: session, status } = useSession();

  const formSubmit = async (e) => {
    e.preventDefault();
    await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
  };

  useEffect(() => {
    if (!session) return;
    if (session?.errors) {
      signOut({
        redirect: false,
      });
      return;
    }

    router.push('/');
  }, [session, router]);

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

              {/* <ErrorList /> */}

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
