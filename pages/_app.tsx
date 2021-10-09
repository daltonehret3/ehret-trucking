import '../styles/globals.css';
import Layout from '../src/components/Layout';
import React, { FC } from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <div style={{minHeight: '100vh', display: 'flex'}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp
