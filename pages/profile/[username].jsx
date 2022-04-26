import ArticleList from 'components/ArticleList';
import ArticlesToggle from 'components/ArticlesToggle';
import UserInfo from 'components/UserInfo';
import AuthContext from 'contexts/AuthContext';
import UsersAPI from 'lib/api/UsersApi';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

const UserProfile = () => {
  const router = useRouter();
  const { user: currentUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);

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

  // useEffect(() => {
  //   const { username, favorite } = router.query;
  //   let articles;
  //   if (favorite) {
  //     articles = (async () => {
  //       return await ArticlesAPI.getArticles(null, null, null, favorite);
  //     })();
  //     setArticles(articles);
  //     return;
  //   }
  //   articles = (async () => {
  //     return await ArticlesAPI.getArticles(null, null, username, null);
  //   })();

  //   setArticles(articles);
  // }, [router.query]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className='profile-page'>
      <UserInfo
        user={user}
        onToggleFollow={toggleFollow}
        currentUser={currentUser}
      />
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-10 offset-md-1'>
            <ArticlesToggle />
            <ArticleList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
