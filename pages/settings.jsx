import { signOut, getSession, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { API_BASE_URL } from 'lib/const';
import { useRouter } from 'next/router';

const Settings = ({ user }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isDisableForm, setIsDisableForm] = useState(false);
  const [image, setImage] = useState(user.image);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState();

  const updateSettings = async (e) => {
    e.preventDefault();
    setIsDisableForm(true);
    const body = {
      user: {
        email,
        bio,
        image,
        username,
      },
    };
    if (password) {
      body.user.password = password;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/user`, {
        method: 'PUT',
        headers: {
          Authorization: `Token ${session.accessToken}`,
        },
        body: JSON.stringify({
          user: {
            email,
            bio,
            image,
            username,
          },
        }),
      });

      if (response.ok) {
        const data = await response.json();
        router.push(`/profile/${data.username}`);
      }
    } catch (error) {
    } finally {
      setIsDisableForm(false);
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
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    disabled={isDisableForm}
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Your Name'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <textarea
                    disabled={isDisableForm}
                    className='form-control form-control-lg'
                    rows='8'
                    placeholder='Short bio about you'
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                  ></textarea>
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    disabled={isDisableForm}
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    disabled={isDisableForm}
                    className='form-control form-control-lg'
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
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
            <button class='btn btn-outline-danger' onClick={signOut}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: '/login',
      },
    };

  const props = {};
  const response = await fetch(`${API_BASE_URL}/user`, {
    headers: {
      Authorization: `Token ${session.accessToken}`,
    },
  });
  const { user } = await response.json();
  if (user) {
    props.user = user;
  }

  return {
    props,
  };
}

export default Settings;
