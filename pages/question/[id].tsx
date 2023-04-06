import { Fragment, MouseEvent, useEffect, useState } from 'react';
import styles from './Question.module.scss';

import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR, { Fetcher } from 'swr';

import HeroImage from '@/components/HeroImage/HeroImage';
import Layout from '@/components/Layout/Layout';
import ModalWarning from '@/components/ModalWarning/modalWarning';
import LoadSpinner from '@/components/LoadSpinner/loadSpinner';

import nextIcon from '../../public/assets/svg/b_next.svg';

import { Choice, Question } from '@/interfaces/api';
import { QuestionAnswer } from '@/interfaces/question';

const Question = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState<QuestionAnswer | null>(null);
  const { id } = router.query;
  const [showModal, setShowModal] = useState(id && results?.currentQuestionId == id ? true : false);

  const getQuestionObj = async (url: string) => {
    try {
      const data = await fetch(url, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_BASE_URL}`,
          'Content-Type': 'application/json',
        },
      });
      const question = await data.json();
      return question;
    } catch (error) {
      return error;
    }
  };

  const fetcher: Fetcher<Question, string> = (url) => getQuestionObj(url);

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/questions/${id}`,
    fetcher
  );

  useEffect(() => {
    const storageResults = sessionStorage.getItem('results');
    if (storageResults) {
      setResults(JSON.parse(storageResults));
    }
  }, [checked]);

  const handleClickNext = () => {
    setChecked(false);
    if (id && typeof id === 'string' && id < '3') {
      router.push(`/question/${parseInt(id) + 1}`);
    } else {
      router.push(`/`);
    }
  };

  const handleModal = () => {
    setShowModal((prevState) => !prevState);
    handleClickNext();
  };

  const handleClickButton = (event: MouseEvent<HTMLButtonElement>) => {
    if (id && results?.currentQuestionId == id) {
      setShowModal(!showModal);
      return;
    }

    if (results) {
      if (event.currentTarget.name === data?.correctAnswer) {
        sessionStorage.setItem(
          'results',
          JSON.stringify({
            ...results,
            right: results.right + 1,
            currentQuestionId: id,
          })
        );
      } else {
        sessionStorage.setItem(
          'results',
          JSON.stringify({
            ...results,
            wrong: results.wrong + 1,
            currentQuestionId: id,
          })
        );
      }
    } else {
      if (event.currentTarget.name === data?.correctAnswer) {
        sessionStorage.setItem(
          'results',
          JSON.stringify({ right: 1, wrong: 0, currentQuestionId: id })
        );
      } else {
        sessionStorage.setItem(
          'results',
          JSON.stringify({ right: 0, wrong: 1, currentQuestionId: id })
        );
      }
    }
    setChecked(true);
  };

  if (error) return <div>Failed to load</div>;
  if (!data) return <LoadSpinner />;

  return (
    <Layout>
      <div className={styles.question}>
        {<HeroImage imagePath={data ? data.backgoundImage : ''} />}
        <div
          className={`d-flex flex-column justify-content-between position-absolute top-0 left-0 py-5 ${styles.questionContainer}`}
        >
          <ModalWarning show={showModal} handleClick={handleModal} />
          <div className={`row ${styles.infoRow}`}>
            <div className={`${styles.questionText} col`}>
              <div className={styles.navigator}>
                <div id="1" className={`${styles.dot} me-1 ${data?.id === 1 && styles.fill}`}></div>
                <div
                  id="2"
                  className={`${styles.dot} me-1  ${data?.id === 2 && styles.fill}`}
                ></div>
                <div id="3" className={`${styles.dot} ${data?.id === 3 && styles.fill}`}></div>
              </div>
              {!checked && <h2 className="pt-2">{data?.text}</h2>}
            </div>
            {checked && (
              <div className={`col ${styles.questionAnswerContainer}`}>
                <div className={`${styles.questionAnswer}`}>
                  <div className={`${styles.header} ps-3 py-2 `}>
                    <h3 className="mb-0">Answer</h3>
                  </div>
                  <div className={`${styles.answer} d-flex align-items-center p-4`}>
                    <p>{data?.answerDescription}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {!checked && (
            <div className={`row ${styles.choiceRow}`}>
              <div
                className={`${styles.questionChoices} col d-flex align-items-center align-items-lg-end justify-content-center justify-content-lg-between flex-column flex-lg-row`}
              >
                {data &&
                  data.choices &&
                  Object.values(data.choices).map((item: Choice) => (
                    <button
                      onClick={(event) => handleClickButton(event)}
                      name={item.text}
                      className={`btn btn-light btn-lg mt-3 ${styles.customButton}`}
                      key={item.id}
                    >
                      {item.text}
                    </button>
                  ))}
              </div>
            </div>
          )}

          {checked && (
            <Fragment>
              <div className={`row ${styles.percentageRow}`}>
                <div
                  className={`${styles.percentage} col d-flex align-items-center  align-items-lg-end justify-content-center justify-content-lg-between flex-column flex-lg-row`}
                >
                  <div className={styles.rightPercentage}>
                    <div className={styles.movingBackgroundRight}></div>
                    <p>{` ${
                      results ? Math.floor((results.wrong / 3) * 100) : 0
                    }% raspunsuri gresite`}</p>
                  </div>
                  <div className={styles.falsePercentage}>
                    <div className={styles.movingBackgroundLeft}></div>
                    <p>{` ${
                      results ? Math.floor((results.right / 3) * 100) : 0
                    }% raspunsuri corecte`}</p>
                  </div>
                </div>
              </div>
              <div onClick={handleClickNext} role="button" className={styles.nextButton}>
                <Image src={nextIcon} alt="next icon" />
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Question;
