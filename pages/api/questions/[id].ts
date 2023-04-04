import type { NextApiRequest, NextApiResponse } from 'next';

import { Question } from '../../../interfaces/api';

import { dbQuestions } from '../../../utils';

const getQuestion = (req: NextApiRequest, res: NextApiResponse<Question>) => {
  const { id } = req.query;
  if (typeof id === 'string' && id) {
    res.status(200).send(dbQuestions[id]);
  }
};

export default getQuestion;
