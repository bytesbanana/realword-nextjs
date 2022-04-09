import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

import Head from '../components/Head';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Head />
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
