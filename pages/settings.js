import React, { useEffect } from 'react';
import UserAPI from 'lib/api/user';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { authActions } from 'store/auth';

const Setting = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [image, setImage] = React.useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setUsername(user.username);
      setBio(user.bio);
      setImage(user.image);
    }
  }, [user]);

  const onSave = async (e) => {
    e.preventDefault();

    const dataUser = {
      email,
      username,
      password,
      bio,
      image,
      token: user.token,
    };

    const response = await UserAPI.setting(dataUser);
    if (response.ok) {
      const updatedData = await response.json();
      localStorage.setItem('user', JSON.stringify(updatedData));
      router.push(`/profile/${username}`);
    }
  };

  const onLogoutClickHandler = () => {
    localStorage.removeItem('user');
    dispatch(authActions.logout());
    router.push('/');
  };

  return (
    <div className='settings-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Your Settings</h1>
            <form onSubmit={onSave}>
              <fieldset>
                <fieldset className='form-group'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='URL of profile picture'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Your Name'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <textarea
                    className='form-control form-control-lg'
                    rows='8'
                    placeholder='Short bio about you'
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    className='form-control form-control-lg'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
                <button
                  className='btn btn-lg btn-primary pull-xs-right'
                  type='submit'
                >
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button
              className='btn btn-outline-danger'
              onClick={onLogoutClickHandler}
            >
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
