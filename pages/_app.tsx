import '../styles/globals.css'
import Layout from '../src/components/Layout'
import { AppProps } from 'next/dist/shared/lib/router/router';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <div style={{minHeight: '100vh', display: 'flex'}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
export default MyApp
