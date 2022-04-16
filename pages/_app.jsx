import '../styles/globals.css';

import Head from '../components/Head';
import Header from '../components/Header';
import { AuthProvider } from 'contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head />
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
