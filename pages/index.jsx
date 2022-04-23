import ArticleList from 'components/ArticleList';
import Banner from 'components/Banner';
import FeedToggle from 'components/FeedToggle';
import PopularTags from 'components/PopularTags';
import AuthContext from 'contexts/AuthContext';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

const Home = () => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const { follow } = router.query;
    if (!router.isReady) return;
    if (!isAuthenticated && follow) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  return (
    <div className='home-page'>
      {!isAuthenticated && <Banner />}
      <div className='container page'>
        <div className='row'>
          <div className='col-md-9'>
            <FeedToggle />
            <ArticleList />
          </div>

          <div className='col-md-3'>
            <div className='sidebar'>
              <PopularTags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
