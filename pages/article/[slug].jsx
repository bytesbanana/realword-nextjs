import ArticleActions from 'components/ArticleActions';
import ArticleBanner from 'components/ArticleBanner';
import ArticleContent from 'components/ArticleContent';
import CommentForm from 'components/CommentForm';
import { CommentList } from 'components/CommentList';
import TagList from 'components/TagList';
import ArticlesAPI from 'lib/api/ArticlesAPI';
import UsersAPI from 'lib/api/UsersApi';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

const Article = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (!slug) return;
    if (!router.isReady) return;

    (async () => {
      const article = await ArticlesAPI.getArticleBySlug(slug);
      setArticle(article);
    })();
  }, [router, slug]);

  if (!slug) return null;

  const handleToggleFollow = async (isFollow) => {
    const updateAuthor = await UsersAPI.setFollow(
      article.author.username,
      isFollow
    );
    console.log(updateAuthor);
    if (updateAuthor) {
      setArticle({
        ...article,
        author: updateAuthor,
      });
    }
  };
  const handleToggleFavorite = async (isFav) => {
    const updatedArticle = await ArticlesAPI.setFavorite(slug, isFav);
    setArticle(updatedArticle);
  };

  return (
    <div className='article-page'>
      <ArticleBanner
        article={article}
        onToggleFollow={handleToggleFollow}
        onToggleFavorite={handleToggleFavorite}
      />
      <div className='container page'>
        <ArticleContent content={article?.body} />
        <TagList tagList={article?.tagList} />
        <hr />
        <ArticleActions
          article={article}
          onToggleFavorite={handleToggleFavorite}
          onToggleFollow={handleToggleFollow}
        />

        <div className='row'>
          <div className='col-xs-12 col-md-8 offset-md-2'>
            <CommentForm />
            <CommentList comments={[{}, {}]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
