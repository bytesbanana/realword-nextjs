import TagList from 'components/TagList';
import ArticleAPI from 'lib/api/article';
import ArticleBanner from 'components/articles/ArticleBanner';

import React from 'react';
import { formatDate } from 'lib/date';

const Article = (props) => {
  const { body, tagList, author, createdAt, favoritesCount } = props.article;
  return (
    <div className='article-page'>
      <ArticleBanner article={props.article} />
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
                objectFit='cover'
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
                />
                <button className='btn btn-sm btn-primary'>Post Comment</button>
              </div>
            </form>

            <div className='card'>
              <div className='card-block'>
                <p className='card-text'>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className='card-footer'>
                <a href='' className='comment-author'>
                  <img
                    src='http://i.imgur.com/Qr71crq.jpg'
                    className='comment-author-img'
                  />
                </a>
                &nbsp;
                <a href='' className='comment-author'>
                  Jacob Schmidt
                </a>
                <span className='date-posted'>Dec 29th</span>
              </div>
            </div>

            <div className='card'>
              <div className='card-block'>
                <p className='card-text'>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className='card-footer'>
                <a href='' className='comment-author'>
                  <img
                    src='http://i.imgur.com/Qr71crq.jpg'
                    className='comment-author-img'
                  />
                </a>
                &nbsp;
                <a href='' className='comment-author'>
                  Jacob Schmidt
                </a>
                <span className='date-posted'>Dec 29th</span>
                <span className='mod-options'>
                  <i className='ion-edit'></i>
                  <i className='ion-trash-a'></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const data = await ArticleAPI.getArticleBySlug(slug);

  return {
    props: {
      article: data.article,
    },
  };
}
export default Article;
