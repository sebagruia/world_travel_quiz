import { useEffect, useState } from 'react';
import styles from './Home.module.scss';

import { useRouter } from 'next/router';

import HeroImage from '@/components/HeroImage/HeroImage';
import Layout from '@/components/Layout/Layout';

import { QuestionAnswer } from '@/interfaces/question';

const Home = () => {
  const router = useRouter();
  const [results, setResults] = useState<QuestionAnswer | null>(null);

  useEffect(() => {
    const storageResults = sessionStorage.getItem('results');
    if (storageResults) {
      setResults(JSON.parse(storageResults));
    }
  }, []);

  const handleClick = () => {
    if (results) {
      sessionStorage.clear();
    }
    router.push('/question/0');
  };

  return (
    <Layout>
      <div className={styles.homeContainer}>
        {<HeroImage imagePath="/assets/images/bg_home.jpg" />}
        <div
          className={`d-flex justify-content-center align-items-start align-items-sm-center position-absolute top-0 left-0 ${styles.textContainer}`}
        >
          <div className={`${styles.heroText} px-3`}>
            <h1>World Travel Quiz</h1>
            <h5>
              {results
                ? `Congratulations, you answered ${results.right} questions correctly!`
                : 'We wish you an enjoyable game'}
            </h5>
            <button
              type="button"
              className={`btn btn-primary mt-3 ${styles.customButton}`}
              onClick={handleClick}
            >
              {results ? 'New Start' : 'Start Game'}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// const getStaticProps = async () => {
//   const client = new ApolloClient({
//     uri: 'https://api.spacex.land/graphql/',
//     cache: new InMemoryCache(),
//   });
//   return {
//     props: {},
//   };
// };

export default Home;
