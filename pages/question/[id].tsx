import { FC } from 'react';
import styles from './Question.module.scss';

import HeroImage from '@/components/HeroImage/HeroImage';
import Layout from '@/components/Layout/Layout';

import heroImage from '../../public/assets/images/lh-1.jpg';

import { Choice, Question } from '@/interfaces/api';
import { path } from '../../utils';

interface IProps {
  question: Question;
}

const Question: FC<IProps> = ({ question }) => {
  return (
    <Layout>
      <div className={styles.question}>
        {<HeroImage imagePath={heroImage} />}
        <div className={`d-grid position-absolute top-0 left-0 py-5 ${styles.questionContainer}`}>
          <div className={`row ${styles.infoRow} justify-content-between`}>
            <div className={`${styles.questionText} col`}>
              <div className={styles.navigator}>
                <div
                  id="1"
                  className={`${styles.dot} me-1 ${question.id === 1 && styles.fill}`}
                ></div>
                <div
                  id="2"
                  className={`${styles.dot} me-1  ${question.id === 2 && styles.fill}`}
                ></div>
                <div id="3" className={`${styles.dot} ${question.id === 3 && styles.fill}`}></div>
              </div>
              <h2 className="pt-2">{question.text}</h2>
            </div>
            <div className={`col ${styles.questionAnswerContainer}`}>
              <div className={`${styles.questionAnswer}`}>
                <div className={`${styles.header} ps-3 py-2 `}>
                  <h3 className="mb-0">Answer</h3>
                </div>
                <div className={`${styles.answer} d-flex align-items-center p-4`}>
                  <p>{question.answer}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`row ${styles.choiceRow}`}>
            <div
              className={`${styles.questionChoices} col d-flex align-items-end justify-content-between`}
            >
              {Object.values(question.choices).map((item: Choice) => (
                <button
                  type="button"
                  className={`btn btn-light btn-lg mt-3 ${styles.customButton}`}
                  key={item.id}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const data = await fetch(`${path}/api/questions`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const questions = await data.json();
  const questionsParams = Object.keys(questions).map((item) => {
    return { params: { id: item } };
  });

  return {
    paths: questionsParams,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { id } = context.params;
  const data = await fetch(`${path}/api/questions/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const question = await data.json();
  return {
    props: { question },
  };
}

export default Question;
