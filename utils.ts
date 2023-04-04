import { Questions } from './interfaces/api';

// API utils
export const path = process.env.NEXT_PUBLIC_BASE_URL;

// DB
export const dbQuestions: Questions = {
  '1': {
    id: 1,
    text: 'Cum se numesc insulele din imagine?',
    choices: [
      { id: 1, text: 'Maldive' },
      { id: 2, text: 'Azore' },
    ],
    correctAnswer: 'Maldive',
    answerDescription:
      'MALDIVE Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    backgoundImage: '/assets/images/lh-1.jpg',
  },
  '2': {
    id: 2,
    text: 'Care este cel mai aglomerat drum din lume?',
    choices: [
      { id: 1, text: 'Drumul spre servici' },
      { id: 2, text: 'Drumul spre casa' },
    ],
    correctAnswer: 'Drumul spre servici',
    answerDescription:
      'DRUMUL SPRE SERVICI Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor.',
    backgoundImage: '/assets/images/lh-2.jpg',
  },
  '3': {
    id: 3,
    text: 'Unde se afla turnul Big Ben?',
    choices: [
      { id: 1, text: 'Timisoara' },
      { id: 2, text: 'Londra' },
    ],
    correctAnswer: 'Londra',
    answerDescription:
      'LONDRA Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website.',
    backgoundImage: '/assets/images/lh-3.jpg',
  },
};
