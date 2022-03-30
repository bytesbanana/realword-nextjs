import Banner from 'components/Banner';
import ArticleFeed from 'components/ArticleFeed';
import { useEffect, useState } from 'react';
import ArticleAPI from 'lib/api/article';
import TagAPI from 'lib/api/tag';
import { useDispatch, useSelector } from 'react-redux';
import { articleActions } from 'store/article';

export default function Home(props) {
  const user = useSelector((state) => state.auth.user);
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

  const isLoggedIn = !!user;
  const fetchGlobalFeed = async () => {
    const data = await ArticleAPI.getGlobalArticles();
    setArticles(data.articles);
  };

  const fetchTags = async () => {
    const data = await TagAPI.getTags();
    setTags(data.tags);
  };

  useEffect(() => {
    fetchGlobalFeed();
    fetchTags();
  }, []);

  const onFetchFeed = async () => {
    dispatch(articleActions.showLoading());
    await fetchGlobalFeed();
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
