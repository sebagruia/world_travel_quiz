import type { NextApiRequest, NextApiResponse } from 'next';

import { Questions } from '../../../interfaces/api';

import { dbQuestions } from '../../../utils';

const getQuestions = (req: NextApiRequest, res: NextApiResponse<Questions>) => {
  res.status(200).send(dbQuestions);
};

export default getQuestions;
