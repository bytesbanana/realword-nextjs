import Banner from 'components/Banner';
import GlobalFeed from 'components/GlobalFeed';
import { useState } from 'react';
import ArticleAPI from 'lib/api/article';
import TagAPI from 'lib/api/tag';
import { useDispatch } from 'react-redux';
import { articleActions } from 'store/article';

export default function Home(props) {
  const [articles, setArticles] = useState(props.articles);
  const dispatch = useDispatch();

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
      <Banner />
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
  const articlesData = await ArticleAPI.getGlobalArticles();

  const popularTagsData = await TagAPI.getTags();

  return {
    props: { ...articlesData, ...popularTagsData },
  };
}
