import React, { useCallback, useEffect, useRef, useState } from 'react';
import UserAPI from 'lib/api/user';
import ArticleAPI from 'lib/api/article';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import ArticlePreview from 'components/ArticlePreviewList';
import { useRouter } from 'next/router';
import { IMAGE_BASE_URL } from 'lib/const'

const Profile = ({ profile }) => {
const currentUser = useSelector((state) => state.auth.user);
const menuDataRef = useRef(['My Articles', 'Favorted Articles']);
const [selectedTab, setSelectedTab] = useState(0);
const [myArticles, setMyArticles] = useState([]);
const router = useRouter();

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

const editProfileHandler = () => {
  router.push('/settings');
};

const followUserHandler = () => {};

const renderProfileAction = () => {
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
const renderMyArticles = () => {
  return <ArticlePreview articles={myArticles} />;
};

return (
  <div className='profile-page'>
    <div className='user-info'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-10 offset-md-1'>
            <Image
              className='user-img'
              src={profile?.image || `${IMAGE_BASE_URL}/smiley-cyrus.jpeg`}
              width={100}
              height={100}
              alt={profile?.username}
            />

            <h4>{profile?.username}</h4>
            <p>{profile?.bio}</p>
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
          {selectedTab === 0 && renderMyArticles()}
        </div>
      </div>
    </div>
  </div>
);
};

export default Profile;

export async function getServerSideProps() {
const profile = await UserAPI.profile();

return {
  props: {
    ...profile,
  },
};
}
