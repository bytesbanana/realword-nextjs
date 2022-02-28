import Banner from 'components/Banner';
import GlobalFeed from 'components/GlobalFeed';
import { useState } from 'react';
import ArticleAPI from 'lib/api/article';
import TagAPI from 'lib/api/tag';

export default function Home(props) {
  const [articles, setArticles] = useState(props.articles);
  const [tags, setTags] = useState(props.tags);

  const fetchGlobalFeed = async () => {
    const data = await ArticleAPI.getGlobalArticles();
    setArticles(data.articles);
  };

  const fetchTags = async () => {
    const data = await TagAPI.getTags();
    setTags(data.tags);
  };

  const onFetchFeed = () => {
    fetchGlobalFeed();
    fetchTags();
  };

  return (
    <div className='home-page'>
      <Banner />
      <div className='container page'>
        <GlobalFeed articles={articles} onFetchFeed={onFetchFeed} tags={tags} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const articlesData = await ArticleAPI.getGlobalArticles();

  const popularTagsData = await TagAPI.getTags();

  return {
    props: { ...articlesData, ...popularTagsData },
  };
}
