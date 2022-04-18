import { useEffect, useState } from 'react';
import Link from 'next/link';

import { withSessionSsr } from 'lib/session';
import ArticlesAPI from 'lib/api/ArticlesAPI';
import TagsAPI from 'lib/api/TagsAPI';

import ArticleList from 'components/ArticleList';
import PopularTags from 'components/PopularTags';

const FeedType = {
  GLOBAL: 'GLOBAL',
  YOUR_FEED: 'YOUR_FEED',
};

const Home = ({ user, articles: tempArticles, tagList }) => {
  const [articles, setArticles] = useState(tempArticles);
  const [currentFeed, setCurrentFeed] = useState(FeedType.GLOBAL);
  const [tag, setTag] = useState(null);
  const [loadingArticles, setLoadingArticles] = useState(false);

  useEffect(() => {
    if (currentFeed === FeedType.GLOBAL) {
      setTag(null);
    }
  }, [currentFeed]);

  const handleTagSelect = async (tag) => {
    setTag(tag);

    setLoadingArticles(true);
    const filteredArticles = await ArticlesAPI.getArticles({
      search: {
        tag,
      },
    });
    setArticles(filteredArticles);
    setLoadingArticles(false);
  };

  const handleGlobalFeedClick = async () => {
    if (loadingArticles) return;
    setLoadingArticles(true);
    setTag(null);
    setCurrentFeed(FeedType.GLOBAL);
    const newArticles = await ArticlesAPI.getArticles();
    setArticles(newArticles);
    setLoadingArticles(false);
  };

  return (
    <>
      <div className='home-page'>
        <div className='banner'>
          <div className='container'>
            <h1 className='logo-font'>conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
        <div className='container page'>
          <div className='row'>
            <div className='col-md-9'>
              <div className='feed-toggle'>
                <ul className='nav nav-pills outline-active'>
                  {user && (
                    <li className='nav-item'>
                      <Link href='/'>
                        <a className='nav-link disabled'>Your Feed</a>
                      </Link>
                    </li>
                  )}
                  <li className='nav-item'>
                    <a
                      className={`nav-link ${
                        currentFeed === FeedType.GLOBAL && !tag ? 'active' : ''
                      }`}
                      style={{ cursor: 'pointer', userSelect: 'none' }}
                      onClick={handleGlobalFeedClick}
                    >
                      Global Feed
                    </a>
                  </li>
                  {tag && (
                    <li className='nav-item'>
                      <a className={`nav-link ${tag ? 'active' : ''}`}>
                        # {tag}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              <ArticleList articles={articles} isLoading={loadingArticles} />
            </div>
            <div className='col-md-3'>
              <div className='sidebar'>
                <PopularTags tagList={tagList} onTagSelect={handleTagSelect} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  const user = req?.session?.user;

  const articles = await ArticlesAPI.getArticles();
  const tagList = await TagsAPI.getTags();

  return {
    props: {
      user: user || null,
      articles: articles || [],
      tagList: tagList || [],
    },
  };
});

export default Home;
