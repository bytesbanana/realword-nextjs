import React, { useRef, useState } from 'react';
import UserAPI from 'lib/api/user';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const Profile = ({ profile }) => {
  const currentUser = useSelector((state) => state.auth.user);
  const menuDataRef = useRef(['My Articles', 'Favorted Articles']);
  const [selectedTab, setSelectedTab] = useState(0);

  const editProfileHandler = () => {};

  const followUserHandler = () => {};

  const renderProfileAction = () => {
    if (currentUser?.username === profile.username) {
      return (
        <button
          className='btn btn-sm btn-outline-secondary action-btn'
          onClick={editProfileHandler}
        >
          <i className='ion-gear-a'></i>
          &nbsp; Edit Profile Settings
        </button>
      );
    }

    return (
      <button
        className='btn btn-sm btn-outline-secondary action-btn'
        onClick={followUserHandler}
      >
        <i className='ion-plus-round'></i>
        &nbsp; Follow {profile.username}
      </button>
    );
  };

  return (
    <div className='profile-page'>
      <div className='user-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-10 offset-md-1'>
              <Image
                className='user-img'
                src={profile.image}
                width={100}
                height={100}
                alt={profile.Profileusername}
              />

              <h4>{profile.username}</h4>
              <p>{profile.bio}</p>
              {renderProfileAction()}
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-10 offset-md-1'>
            <div className='articles-toggle'>
              <ul className='nav nav-pills outline-active'>
                {menuDataRef.current.map((menu, i) => (
                  <li className='nav-item' key={i}>
                    <a
                      className={`nav-link ${i == selectedTab && 'active'}`}
                      onClick={() => setSelectedTab(i)}
                    >
                      {menu}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

export async function getStaticProps() {
  const profile = await UserAPI.profile();

  return {
    props: {
      ...profile,
    },
  };
}
