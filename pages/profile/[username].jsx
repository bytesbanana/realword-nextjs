import UserInfo from 'components/UserInfo';
import AuthContext from 'contexts/AuthContext';
import UsersAPI from 'lib/api/UsersApi';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

const UserProfile = () => {
  const router = useRouter();
  const { user: currentUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  // if (!user) return <p>Loading...</p>;

  useEffect(() => {
    if (!router.isReady) return;
    const { username } = router.query;
    (async () => {
      const userProfile = await UsersAPI.getByUsername(username);
      if (userProfile) {
        setUser(userProfile);
      }
    })();
  }, [router]);

  const toggleFollow = async (isFollow) => {
    const updateUser = await UsersAPI.setFollow(user.username, isFollow);
    setUser(updateUser);
  };

  return (
    <div className='profile-page'>
      <UserInfo user={user} onToggleFollow={toggleFollow} />
    </div>
  );
};

export default UserProfile;
