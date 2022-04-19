import TagsAPI from 'lib/api/TagsAPI';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const PopularTags = () => {
  const [loading, setLoading] = useState(true);
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    (async () => {
      setTagList(await TagsAPI.getTags());
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <p>Popular Tags</p>
      <div className='tag-list'>
        {loading && <p>Loading tags...</p>}
        {tagList.map((tag) => (
          <Link key={tag} href={`/?tag=${tag}`} shallow>
            <a className='tag-default tag-pill'>{tag}</a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default PopularTags;
