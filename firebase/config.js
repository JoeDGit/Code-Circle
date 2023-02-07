import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: String(process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
  authDomain: 'code-circle-e4a7a.firebaseapp.com',
  projectId: 'code-circle-e4a7a',
  storageBucket: 'code-circle-e4a7a.appspot.com',
  messagingSenderId: '607448944550',
  appId: '1:607448944550:web:d2ec26786b015639c60967',
  measurementId: 'G-VJPC5R0N31',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, app, storage };
