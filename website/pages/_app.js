// import React from 'react';
// import App from 'next/app';

import '../styles/global.css'; // Assuming you have a global stylesheet
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const is_home = router.pathname === '/'; // Assuming "/" is the path for the home page
  {console.log(is_home)}
  return (
    <Layout is_home={is_home}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
