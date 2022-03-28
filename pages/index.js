import Banner from 'components/Banner';
import GlobalFeed from 'components/GlobalFeed';
import { useEffect, useState } from 'react';
import ArticleAPI from 'lib/api/article';
import TagAPI from 'lib/api/tag';
import { useDispatch, useSelector } from 'react-redux';
import { articleActions } from 'store/article';

export default function Home(props) {
  const user = useSelector((state) => state.auth.user);
  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();

  const isLoggedIn = !!user;

  useEffect(() => {
    fetchGlobalFeed();
  }, []);

  const fetchGlobalFeed = async () => {
    const data = await ArticleAPI.getGlobalArticles();
    setArticles(data.articles);
  };

  const onFetchFeed = async () => {
    dispatch(articleActions.showLoading());
    await fetchGlobalFeed();
    dispatch(articleActions.hideLoading());
  };

  return (
    <div className='home-page'>
      {!isLoggedIn && <Banner />}
      <div className='container page'>
        <GlobalFeed
          articles={articles}
          onFetchFeed={onFetchFeed}
          tags={props.tags}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const popularTagsData = await TagAPI.getTags();

  return {
    props: { ...popularTagsData },
  };
}
