import { getDocs, collection, query, where } from 'firebase/firestore';

import { db } from '../firebase/config';

export async function getReplies(postId) {
  const repliesCollection = collection(db, 'replies');
  let q = query(repliesCollection);
  if (postId) {
    q = query(repliesCollection, where('postId', '==', postId));
  }
  const repliesSnapshot = await getDocs(q);
  const postReplies = repliesSnapshot.docs.map((doc) => doc.data());
  return postReplies;
}
