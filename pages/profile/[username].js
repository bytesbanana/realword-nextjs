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
  const currentUser = useSelector((state) => state.auth.user);
  const [myArticles, setMyArticles] = useState([]);
  const showFavoriteArticle = router.query?.favorite;

  const fetchMyArticles = useCallback(() => {
    if (currentUser) {
      ArticleAPI.getArticleByAuthor(currentUser.username).then((data) => {
        setMyArticles(data.articles || []);
      });
    }
  }, [currentUser]);

  useEffect(() => {
    fetchMyArticles();
  }, [fetchMyArticles]);

  const followUserHandler = () => {};

  let profileActionButton = (
    <button
      className='btn btn-sm btn-outline-secondary action-btn'
      onClick={followUserHandler}
    >
      <i className='ion-plus-round'></i>
      &nbsp; Follow {profile?.username}
    </button>
  );

  if (currentUser?.username === profile?.username) {
    profileActionButton = (
      <button
        className='btn btn-sm btn-outline-secondary action-btn'
        onClick={editProfileHandler}
      >
        <i className='ion-gear-a'></i>
        &nbsp; Edit Profile Settings
      </button>
    );
  }

  const articles = showFavoriteArticle ? [] : myArticles;
  const articleList = <ArticlePreviewList articles={articles} />;

  const editProfileHandler = () => {
    router.push('/settings');
  };

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
              {profileActionButton}
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-10 offset-md-1'>
            <ProfileTab username={currentUser?.username} />
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
