import Banner from 'components/Banner';
import GlobalFeed from 'components/GlobalFeed';
import PopuplarTags from 'components/PopularTags';
import { useEffect, useState } from 'react';

export default function Home(props) {
  const [articles, setArticles] = useState(props.articles);

  const fetchGlobalFeed = async () => {
    console.log(process.env)
    const data = await fetch(
      `${process.env.API_BASE_URL}/articles?limit=10&offset=0`
    ).then((response) => response.json());

    setArticles(data.articles);
  };

  const onFetchFeed = () => {
    fetchGlobalFeed();
  };

  return (
    <>
      <Banner />
      <div className='container flex flex-row p-10 mx-auto'>
        <GlobalFeed articles={props.data.articles} onFetchFeed={onFetchFeed} />
        <PopuplarTags />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    `${process.env.API_BASE_URL}/articles?limit=10&offset=0`
  ).then((response) => response.json());
  return {
    props: { data },
  };
}
