import AuthContext from 'contexts/AuthContext';
import ArticlesAPI from 'lib/api/ArticlesAPI';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

import ArticleListItem from './ArticleListItem';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;
    const { follow, tag, username, favorite } = router.query;

    if (follow && tag) {
      router.push('/', undefined, { shallow: true });
      return;
    }

    if (follow && follow !== user?.username) {
      router.push('/', undefined, {
        shallow: true,
      });
      return;
    }

    (async () => {
      setLoading(true);
      setArticles(
        await ArticlesAPI.getArticles(
          !!follow,
          tag,
          favorite ? undefined : username,
          favorite && username
        )
      );
      setLoading(false);
    })();
  }, [router, user]);

  return (
    <>
      {loading && (
        <div className='article-preview'>
          <p>Loading articles...</p>
        </div>
      )}
      {!loading && articles.length === 0 && (
        <div className='article-preview'>
          <p>No articles are here... yet.</p>
        </div>
      )}
      {!loading &&
        articles &&
        articles.length > 0 &&
        articles.map((article) => (
          <ArticleListItem key={article.slug} article={article} />
        ))}
    </>
  );
};

export default ArticleList;
