import * as React from 'react';
import UserAPI from 'lib/api/user';
import { useDispatch } from 'react-redux';
import { authActions } from 'store/auth';

const Setting = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [image, setImage] = React.useState('');

  const onSave = async (e) => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('user', user);
    try {
      const dataUser = {
        email,
        username,
        password,
        bio,
        image,
        token: user.token,
      };

      const response = await UserAPI.setting(dataUser);
      console.log('dataUser', dataUser, response);
    } catch (error) {
      console.log('error', error);
    }
  };

  const onLogoutClickHandler = () => {
    localStorage.removeItem('user');
    dispatch(authActions.logout());
  };

  return (
    <div className='settings-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Your Settings</h1>
            <form>
              <fieldset>
                <fieldset className='form-group'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='URL of profile picture'
                    onChange={(e) => setImage(e.target.value)}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Your Name'
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <textarea
                    className='form-control form-control-lg'
                    rows='8'
                    placeholder='Short bio about you'
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    className='form-control form-control-lg'
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
                <button
                  className='btn btn-lg btn-primary pull-xs-right'
                  type='button'
                  onClick={onSave}
                >
                  Update Settings test
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
