import TagList from 'components/TagList';
import ArticleAPI from 'lib/api/article';
import ArticleBanner from 'components/articles/ArticleBanner';

import React, { useState } from 'react';
import { formatDate } from 'lib/date';
import { useSelector } from 'react-redux';
import Comment from 'components/Comment';
import CommentAPI from 'lib/api/comment';
import { useRouter } from 'next/router';

const Article = ({ initialArticle, comments }) => {
  const [article, setArticle] = useState(initialArticle);
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = !!user;
  const router = useRouter();
  const { slug } = router.query;

  const favoritePost = async () => {
    const response = await ArticleAPI.favoriteArticle(slug);
    if (response.ok) {
      const data = await response.json();
      setArticle(data.article);
    }
  };

  const unFavoritePost = async () => {
    const response = await ArticleAPI.unfavoriteArticle(slug);
    if (response.ok) {
      const data = await response.json();

      setArticle(data.article);
    }
  };

  return (
    <div className='article-page'>
      <ArticleBanner
        article={article}
        onFavoritePost={favoritePost}
        onUnFavoritePost={unFavoritePost}
      />

      <div className='container page'>
        <div className='row article-content'>
          <div className='col-md-12'>
            <div>
              <p>{article?.body}</p>
            </div>
            <TagList tags={article?.tagList} style={{ marginBottom: '16px' }} />
          </div>
        </div>

        <hr />

        <div className='article-actions'>
          <div className='article-meta'>
            <a className='link-profile-holder'>
              <img
                src={article?.author?.image}
                width='32'
                height='32'
                alt={article?.author?.username}
              />
            </a>
            <div className='info'>
              <a className='author'>{article?.author?.username}</a>
              <span className='date'>{formatDate(article?.createdAt)}</span>
            </div>
            <button className='btn btn-sm btn-outline-secondary'>
              <i className='ion-plus-round' />
              &nbsp; Follow Eric Simons
            </button>
            &nbsp;
            <button className='btn btn-sm btn-outline-primary'>
              <i className='ion-heart' />
              &nbsp; Favorite Article{' '}
              <span className='counter'>({article?.favoritesCount})</span>
            </button>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-md-8 offset-md-2'>
            {isLoggedIn && (
              <form className='card comment-form'>
                <div className='card-block'>
                  <textarea
                    className='form-control'
                    placeholder='Write a comment...'
                    rows='3'
                  />
                </div>
                <div className='card-footer'>
                  <img
                    src='http://i.imgur.com/Qr71crq.jpg'
                    className='comment-author-img'
                    alt=''
                  />
                  <button className='btn btn-sm btn-primary'>
                    Post Comment
                  </button>
                </div>
              </form>
            )}

            {!isLoggedIn && (
              <p>
                <a ui-sref='app.login' href='#/login'>
                  Sign in
                </a>{' '}
                or{' '}
                <a ui-sref='app.register' href='#/register'>
                  sign up
                </a>{' '}
                to add comments on this article.
              </p>
            )}
            {comments &&
              comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const data = await ArticleAPI.getArticleBySlug(slug);
  const dataComments = await CommentAPI.getComment(slug);
  console.log(data);

  return {
    props: {
      initialArticle: data.article,
      comments: dataComments.comments,
    },
  };
}
export default Article;
