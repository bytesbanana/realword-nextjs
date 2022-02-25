import 'styles/globals.css';
import Header from 'components/Header';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
