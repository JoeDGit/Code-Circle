import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export default async function getSinglePost(postId) {
  const postDoc = doc(db, 'posts', postId);
  const postSnapshot = await getDoc(postDoc);
  const postData = postSnapshot.data();

  return postData;
}
