import ArticleList from 'components/ArticleList';
import Banner from 'components/Banner';
import FeedToggle from 'components/FeedToggle';
import PopularTags from 'components/PopularTags';
import React from 'react';

const Home = () => {
  return (
    <div className='home-page'>
      <Banner />
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
