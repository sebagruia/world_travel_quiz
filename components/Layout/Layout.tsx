import { FC, ReactNode } from 'react';
import styles from './Layout.module.scss';

import Head from 'next/head';
import Container from 'react-bootstrap/Container';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

interface IProps {
  children?: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <Container fluid className={styles.container}>
      <Head>
        <title>WorldTravelQuiz</title>
        <meta name="description" content="Question Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
