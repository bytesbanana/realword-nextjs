import 'styles/globals.css';
import Head from 'next/head';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';

import { Provider } from 'react-redux';
import store from 'store';
import Layout from 'components/Layout';


const progress = new ProgressBar({
  size: 4,
  color: '#5cb85c',
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Head>
          <meta charSet='utf-8' />
          <title>Conduit</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </Provider>
  );
}

export default MyApp;
