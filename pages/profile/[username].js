import React, { useCallback, useEffect, useRef, useState } from 'react';
import UserAPI from 'lib/api/user';
import ArticleAPI from 'lib/api/article';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import ArticlePreviewList from 'components/articles/ArticlePreviewList';
import { useRouter } from 'next/router';
import ProfileTab from 'components/profile/ProfileTab';

const Profile = ({ profile }) => {
  const router = useRouter();
  const currentUser = JSON.parse(localStorage.getItem('user'))
  const [myArticles, setMyArticles] = useState([]);
  const [favoriteArticles, setFavoriteArticles] = useState([]);
  const showFavoriteArticle = router.query?.favorite;
  const username = router.query?.username;

  if (username === 'undefined') {
    router.push('/');
  }

  const fetchMyArticles = useCallback(() => {
    if (username) {
      if (showFavoriteArticle) {
        ArticleAPI.getFavoriteArticles(username).then((data) => {
          setFavoriteArticles(data.articles);
        });
      } else {
        ArticleAPI.getArticleByAuthor(username).then((data) => {
          setMyArticles(data.articles || []);
        });
      }
    }
  }, [username, showFavoriteArticle]);

  useEffect(() => {
    fetchMyArticles();
  }, [fetchMyArticles]);

  const followUserHandler = () => {};

  const editProfileHandler = () => {
    router.push('/settings');
  };

  const renderActionButton = () => {
    if (currentUser?.username === profile?.username) {
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
        &nbsp; Follow {profile?.username}
      </button>
    );
  };

  const articles = showFavoriteArticle ? favoriteArticles : myArticles;
  const articleList = <ArticlePreviewList articles={articles} />;

  return (
    <div className='profile-page'>
      <div className='user-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-10 offset-md-1'>
              <Image
                className='user-img'
                src={profile?.image || '/smiley-cyrus.jpeg'}
                width={100}
                height={100}
                alt={profile?.username}
              />

              <h4>{profile?.username}</h4>
              <p>{profile?.bio}</p>
              {renderActionButton()}
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-10 offset-md-1'>
            <ProfileTab username={username} />
            {articleList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

export async function getServerSideProps(ctx) {
  const username = ctx.query?.username;
  const profile = await UserAPI.profile(username);

  return {
    props: {
      ...profile,
    },
  };
}
