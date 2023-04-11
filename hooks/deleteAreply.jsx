import { db } from '../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';

export default function deleteAreply(replyId) {
  try {
    deleteDoc(doc(db, 'replies', replyId));
  } catch (err) {
    console.log(err);
  }
}
