import '../styles/globals.css';

import Head from '../components/Head';
import Header from '../components/Header';
import { withSession } from 'lib/session';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get('user');

  console.log(user);
  return {
    props: { session: { user } },
  };
});

export default MyApp;
