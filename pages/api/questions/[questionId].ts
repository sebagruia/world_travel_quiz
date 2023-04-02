import type { NextApiRequest, NextApiResponse } from 'next';

import { Question } from '../../../interfaces/api';

import { dbQuestions } from '../../../utils';

const getQuestion = (req: NextApiRequest, res: NextApiResponse<Question>) => {
  const { questionId } = req.query;
  if (typeof questionId === 'string' && questionId) {
    res.status(200).send(dbQuestions[questionId]);
  }
};

export default getQuestion;
