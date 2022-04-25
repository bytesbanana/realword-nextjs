import ArticleActions from 'components/ArticleActions';
import ArticleBanner from 'components/ArticleBanner';
import ArticleContent from 'components/ArticleContent';
import CommentForm from 'components/CommentForm';
import { CommentList } from 'components/CommentList';
import TagList from 'components/TagList';
import AuthContext from 'contexts/AuthContext';
import ArticlesAPI from 'lib/api/ArticlesAPI';
import UsersAPI from 'lib/api/UsersApi';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef, useState } from 'react';

const Article = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!slug) return;
    if (!router.isReady) return;

    (async () => {
      const article = await ArticlesAPI.getArticleBySlug(slug);
      const comments = await ArticlesAPI.getCommentsBySlug(slug);
      setArticle(article);
      setComments(comments);
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

  const onPostClick = async (newComment) => {
    if (!newComment) return;
    const addedComment = await ArticlesAPI.commentAnArticle(slug, newComment);
    setComments((p) => [...p, addedComment]);
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
            <CommentForm user={user} onPostClick={onPostClick} />
            <CommentList comments={comments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
