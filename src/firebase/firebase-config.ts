import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'apiKey',
  authDomain: 'authDomain',
  projectId: 'projectName',
  storageBucket: 'storageBucket',
  messagingSenderId: 'messengerSenderID',
  appId: 'appId',
  measurementId: 'masurementId',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const analytics = getAnalytics(app);
