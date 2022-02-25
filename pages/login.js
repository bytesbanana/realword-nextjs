import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {};

  return (
    <div className='container mx-auto'>
      <form className='flex flex-col max-w-sm p-10 mx-auto space-y-4'>
        <h1 className='mb-4 text-4xl font-light text-center'>Sign in</h1>
        <input
          type='email'
          placeholder='Email'
          className='form-input'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
          className='form-input'
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='flex items-center'>
          <Link href='/register'>
            <a className='flex-auto text-sm text-green-700'>
              {"Don't have an account?"}
            </a>
          </Link>
          <button type='button' className='btn-primary' onClick={loginHandler}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
