import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';

import { Inter } from 'next/font/google';

import client from '@/apollo/client';

const inter = Inter({ subsets: ['latin'] });

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );
};

export default App;
