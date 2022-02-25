import Banner from 'components/Banner';
import GlobalFeed from 'components/GlobalFeed';
import { useState } from 'react';

export default function Home(props) {
  const [articles, setArticles] = useState(props.articles);
  const [tags, setTags] = useState(props.tags);

  const fetchGlobalFeed = async () => {
    const data = await fetch(
      `${process.env.API_BASE_URL}/articles?limit=10&offset=0`
    ).then((response) => response.json());

    setArticles(data.articles);
  };

  const onFetchFeed = () => {
    fetchGlobalFeed();
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
  const articlesData = await fetch(
    `${process.env.API_BASE_URL}/articles?limit=10&offset=0`
  ).then((response) => response.json());

  const popularTagsData = await fetch(`${process.env.API_BASE_URL}/tags`).then(
    (response) => response.json()
  );

  return {
    props: { ...articlesData, ...popularTagsData },
  };
}
