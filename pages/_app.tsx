import '../styles/globals.css';
import Layout from '../src/components/Layout';
import React from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { WebsiteComingSoon } from '../src/components/WebsiteComingSoon';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev){
    return (
      <div style={{minHeight: '100vh', display: 'flex'}}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    );
  } else {
    return (
      <WebsiteComingSoon />
    );
  }
      
  
};

export default MyApp
