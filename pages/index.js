import Banner from 'components/Banner';
import ArticleFeed from 'components/ArticleFeed';
import { useEffect, useState } from 'react';
import ArticleAPI from 'lib/api/article';
import TagAPI from 'lib/api/tag';
import { useDispatch, useSelector } from 'react-redux';
import { articleActions } from 'store/article';
import { FeedType } from 'lib/const';

export default function Home(props) {
  const user = useSelector((state) => state.auth.user);
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

  const isLoggedIn = !!user;
  const fetchGlobalFeed = async (feedType) => {
    let data;
    if (feedType === FeedType.your) {
      data = await ArticleAPI.getArticleFeed();
    } else if (feedType === FeedType.global) {
      data = await ArticleAPI.getGlobalArticles();
    }
    if (data?.articles) {
      setArticles(data.articles);
    }
  };

  const fetchTags = async () => {
    const data = await TagAPI.getTags();
    setTags(data.tags);
  };

  useEffect(() => {
    fetchGlobalFeed(FeedType.global);
    fetchTags();
  }, []);

  const onFetchFeed = async (feedType) => {
    dispatch(articleActions.showLoading());

    await fetchGlobalFeed(feedType);
    dispatch(articleActions.hideLoading());
  };

  return (
    <div className='home-page'>
      {!isLoggedIn && <Banner />}
      <div className='container page'>
        <ArticleFeed
          articles={articles}
          onFetchFeed={onFetchFeed}
          tags={tags}
        />
      </div>
    </div>
  );
}
