import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic&display=swap'
          rel='stylesheet'
          type='text/css'
        />
        <link
          rel='stylesheet'
          href='https://demo.productionready.io/main.css'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
