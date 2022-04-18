import '../styles/globals.css';

import Header from '../components/Header';
import { AuthProvider } from 'contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
