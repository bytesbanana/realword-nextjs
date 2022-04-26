import AuthContext from 'contexts/AuthContext';
import UsersAPI from 'lib/api/UsersApi';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import ToggleFollowButton from './ToggleFollowButton';

const UserInfo = ({ user, onToggleFollow }) => {
  const router = useRouter();
  const { user: currentUser } = useContext(AuthContext);

  if (!user) return <p>Loading..</p>;

  const renderButton = () => {
    if (currentUser?.username === user.username) {
      return (
        <>
          <button
            className='btn btn-sm btn-outline-secondary action-btn'
            onClick={() => router.push('/settings')}
          >
            <i className='ion-gear-a'></i>
            &nbsp; Edit Profile Settings
          </button>
        </>
      );
    }

    return (
      <button
        className={`btn btn-sm btn-outline-secondary action-btn`}
        onClick={() => onToggleFollow(!user.following)}
      >
        <i className='ion-plus-round'></i>
        &nbsp; {user.following ? 'Unfollow' : 'Follow'} {user.username}
      </button>
    );
  };
  return (
    <div className='user-info'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-10 offset-md-1'>
            <img
              src={user.image}
              className='user-img'
              alt={`${user.username}`}
            />
            <h4>{user.username}</h4>
            <p>{user.bio}</p>
            {renderButton()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
