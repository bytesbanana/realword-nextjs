import React from 'react';
import Link from 'next/link';

const Register = () => {
  return (
    <div className='container mx-auto'>
      <form className='flex flex-col max-w-sm p-10 mx-auto space-y-4'>
        <h1 className='mb-4 text-4xl font-light text-center'>Sign up</h1>

        <input type='email' placeholder='Email' className='form-input' />
        <input type='text' placeholder='Username' className='form-input' />
        <input type='password' placeholder='Password' className='form-input' />
        <input
          type='password'
          placeholder='Confirm password'
          className='form-input'
        />
        <div className='flex items-center'>
          <Link href='/register'>
            <a className='flex-auto text-sm text-green-700'>
              {"Don't have an account?"}
            </a>
          </Link>
          <button type='button' className='btn-primary'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
