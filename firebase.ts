// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAAukbW8EnMbD_yDSy1Ej8WkHHZ8kMFkaI',
  authDomain: 'world-travel-quiz-15c7c.firebaseapp.com',
  projectId: 'world-travel-quiz-15c7c',
  storageBucket: 'world-travel-quiz-15c7c.appspot.com',
  messagingSenderId: '682813224661',
  appId: '1:682813224661:web:662101962f24449160545c',
  measurementId: 'G-0NSS3MN7TN',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
