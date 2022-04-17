import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import AuthContext from 'contexts/AuthContext';
import { withSessionSsr } from 'lib/session';

const Settings = ({ user: currentUser }) => {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const [isDisableForm, setIsDisableForm] = useState(false);
  const [user, setUser] = useState(currentUser);

  const updateSettings = async (e) => {
    e.preventDefault();
    setIsDisableForm(true);
    const body = {
      user,
    };

    try {
      const response = await fetch(`api/user`, {
        method: 'PUT',
        'Content-Type': 'application/json;',
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        router.push(`/profile/${data.user.username}`);
      }
    } finally {
      setIsDisableForm(false);
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/logout');
    if (response.ok) {
      authContext.logout();
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
                    disabled={isDisableForm}
                    className='form-control'
                    type='text'
                    placeholder='URL of profile picture'
                    value={user.image}
                    onChange={(e) =>
                      setUser({ ...user, image: e.target.value })
                    }
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    disabled={isDisableForm}
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Your Name'
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <textarea
                    disabled={isDisableForm}
                    className='form-control form-control-lg'
                    rows='8'
                    placeholder='Short bio about you'
                    value={user.bio}
                    onChange={(e) => setUser({ ...user, bio: e.target.value })}
                  ></textarea>
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    disabled={isDisableForm}
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Email'
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    disabled={isDisableForm}
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
                  onClick={updateSettings}
                >
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />

            <button className='btn btn-outline-danger' onClick={handleLogout}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  const user = req.session.user;

  return {
    props: {
      user,
    },
  };
});
export default Settings;
