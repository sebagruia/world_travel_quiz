import styles from './Home.module.scss';

import HeroImage from '@/components/HeroImage/HeroImage';
import Layout from '@/components/Layout/Layout';

import heroImage from '../public/assets/images/bg_home.jpg';

const Home = () => {
  return (
    <Layout>
      <div className={styles.homeContainer}>
        {<HeroImage imagePath={heroImage} />}
        <div
          className={`d-flex justify-content-center align-items-center position-absolute top-0 left-0 ${styles.textContainer}`}
        >
          <div className={`${styles.heroText} px-3`}>
            <h1>World Travel Quiz</h1>
            <h5>We wish you an enjoyable game</h5>
            <button type="button" className={`btn btn-primary mt-3 ${styles.customButton}`}>
              Start Game
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
