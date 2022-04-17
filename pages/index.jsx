import Link from 'next/link';

const Home = () => {
  return (
    <>
      <div className='home-page'>
        <div className='banner'>
          <div className='container'>
            <h1 className='logo-font'>conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
        <div className='container page'>
          <div className='row'>
            <div className='col-md-9'>
              <div className='feed-toggle'>
                <ul className='nav nav-pills outline-active'>
                  <li className='nav-item'>
                    <Link href={''}>
                      <a className='nav-link disabled'>Your Feed</a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href={''}>
                      <a className='nav-link active'>Global Feed</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='article-preview'>
                <div className='article-meta'>
                  <Link href='profile.html'>
                    <a>
                      <img src='http://i.imgur.com/Qr71crq.jpg' />
                    </a>
                  </Link>
                  <div className='info'>
                    <Link href={''}>
                      <a className='author'>Eric Simons</a>
                    </Link>
                    <span className='date'>January 20th</span>
                  </div>
                  <button className='btn btn-outline-primary btn-sm pull-xs-right'>
                    <i className='ion-heart' /> 29
                  </button>
                </div>
                <Link href={''}>
                  <a href={''} className='preview-link'>
                    <h1>How to build webapps that scale</h1>
                    <p>This is the description for the post.</p>
                    <span>Read more...</span>
                  </a>
                </Link>
              </div>
              <div className='article-preview'>
                <div className='article-meta'>
                  <Link href='profile.html'>
                    <a>
                      <img src='http://i.imgur.com/N4VcUeJ.jpg' />
                    </a>
                  </Link>
                  <div className='info'>
                    <Link href={''}>
                      <a className='author'>Albert Pai</a>
                    </Link>
                    <span className='date'>January 20th</span>
                  </div>
                  <button className='btn btn-outline-primary btn-sm pull-xs-right'>
                    <i className='ion-heart' /> 32
                  </button>
                </div>
                <Link href={''}>
                  <a className='preview-link'>
                    <h1>
                      The song you won't ever stop singing. No matter how hard
                      you try.
                    </h1>
                    <p>This is the description for the post.</p>
                    <span>Read more...</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='sidebar'>
                <p>Popular Tags</p>
                <div className='tag-list'>
                  <Link href={''}>
                    <a className='tag-pill tag-default'>programming</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
