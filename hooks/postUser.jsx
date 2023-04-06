import { db } from '../firebase/config';
import { addDoc, collection } from 'firebase/firestore';

export const postUser = (displayName, techStack, avatarURL) => {
  try {
    const docRef = addDoc(collection(db, 'users'), {
      displayName,
      techStack,
      avatarURL,
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
