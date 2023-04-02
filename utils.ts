import { Questions } from './interfaces/api';

// API utils
const dev = process.env.NODE_ENV !== 'production';
export const path = dev ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_BASE_URL;

// DB
export const dbQuestions: Questions = {
  '1': {
    id: 1,
    text: 'Cum se numesc insulele din imagine?',
    choices: [
      { id: 1, text: 'Maldive' },
      { id: 2, text: 'Azore' },
    ],
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  '2': {
    id: 2,
    text: 'Care este cel mai aglomerat drum din lume?',
    choices: [
      { id: 1, text: 'drumul spre servici' },
      { id: 2, text: 'drumul spre casa' },
    ],
    answer:
      'Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor.',
  },
  '3': {
    id: 3,
    text: 'Unde se afla turnul Bin Ben?',
    choices: [
      { id: 1, text: 'Timisoara' },
      { id: 2, text: 'Londra' },
    ],
    answer: 'Londra',
  },
};
