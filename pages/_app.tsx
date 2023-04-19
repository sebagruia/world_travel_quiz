import '@/styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@/apollo/client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps);
  return (
    <ApolloProvider client={client}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      //{' '}
    </ApolloProvider>
  );
};

export default App;
