import AuthContext from 'contexts/AuthContext';
import UsersAPI from 'lib/api/UsersApi';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

const Settings = () => {
  const router = useRouter();
  const { user: sessionUser, login, logout } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [disabledForm, setDisableForm] = useState(true);

  useEffect(() => {
    if (router.isReady) {
      if (!sessionUser) {
        router.push('/login');
      }
    }
  }, [router, sessionUser]);

  useEffect(() => {
    (async () => {
      const data = await UsersAPI.get();
      if (data?.user) {
        const { user } = data;
        setUser(user);
        setDisableForm(false);
      }
    })();
  }, []);

  const handleUpdateClick = async (e) => {
    e.preventDefault();
    try {
      setDisableForm(true);
      const data = await UsersAPI.update(user);
      if (data?.user) {
        const { user } = data;
        login(user);
        router.push(`/profile/${user.username}`);
      }
    } finally {
      setDisableForm(false);
    }
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
                    disabled={disabledForm}
                    className='form-control'
                    type='text'
                    placeholder='URL of profile picture'
                    value={user?.image}
                    onChange={(e) =>
                      setUser({ ...user, image: e.target.value })
                    }
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    disabled={disabledForm}
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Your Name'
                    value={user?.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <textarea
                    disabled={disabledForm}
                    className='form-control form-control-lg'
                    rows={8}
                    placeholder='Short bio about you'
                    defaultValue={user?.bio}
                    onChange={(e) => setUser({ ...user, bio: e.target.value })}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    disabled={disabledForm}
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Email'
                    value={user?.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    disabled={disabledForm}
                    className='form-control form-control-lg'
                    type='password'
                    placeholder='Password'
                    value={user?.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </fieldset>
                <button
                  className='btn btn-lg btn-primary pull-xs-right'
                  onClick={handleUpdateClick}
                  disabled={disabledForm}
                >
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button className='btn btn-outline-danger' onClick={logout}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
