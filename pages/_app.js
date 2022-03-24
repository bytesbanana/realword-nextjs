import 'styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';
import store from 'store';
import Layout from 'components/Layout';

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
