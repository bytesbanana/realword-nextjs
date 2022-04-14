import '../styles/globals.css';

import Head from '../components/Head';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
