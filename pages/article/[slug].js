import TagList from 'components/TagList';
import ArticleAPI from 'lib/api/article';
import ArticleBanner from 'components/articles/ArticleBanner';

import React from 'react';
import { formatDate } from 'lib/date';
import { useSelector } from 'react-redux';
import Comment from 'components/Comment';
import CommentAPI from 'lib/api/comment';

const Article = ({ article, comments }) => {
  const { body, tagList, author, createdAt, favoritesCount } = article;
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = !!user;

  return (
    <div className='article-page'>
      <ArticleBanner article={article} />
      <div className='container page'>
        <div className='row article-content'>
          <div className='col-md-12'>
            <div>
              <p>{body}</p>
            </div>
            <TagList tags={tagList} style={{ marginBottom: '16px' }} />
          </div>
        </div>

        <hr />

        <div className='article-actions'>
          <div className='article-meta'>
            <a className='link-profile-holder'>
              <img
                src={author.image}
                width='32'
                height='32'
                alt={author.username}
              />
            </a>
            <div className='info'>
              <a className='author'>{author.username}</a>
              <span className='date'>{formatDate(createdAt)}</span>
            </div>
            <button className='btn btn-sm btn-outline-secondary'>
              <i className='ion-plus-round' />
              &nbsp; Follow Eric Simons
            </button>
            &nbsp;
            <button className='btn btn-sm btn-outline-primary'>
              <i className='ion-heart' />
              &nbsp; Favorite Article{' '}
              <span className='counter'>({favoritesCount})</span>
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

  return {
    props: {
      article: data.article,
      comments: dataComments.comments,
    },
  };
}
export default Article;
