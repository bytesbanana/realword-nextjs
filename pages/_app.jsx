import '../styles/globals.css';

import Header from '../components/Header';
import { AuthProvider } from 'contexts/AuthContext';
import ImplementRibbon from 'components/UnderDevelopmentBanner';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ImplementRibbon />
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
