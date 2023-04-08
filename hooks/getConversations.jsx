import { getDocs, collection, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';

export async function getConversations(userDisplayName) {
  const conversationsCol = collection(db, 'messages');
  const recipientQuery = query(
    conversationsCol,
    where('recipient', '==', userDisplayName),
    orderBy('time', 'desc')
  );
  const conversationsSnapshot = await getDocs(recipientQuery);
  
  const conversationsList = conversationsSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      createdAt: new Date(doc._document.createTime.timestamp.seconds * 1000),
    };
  });
  return conversationsList;
}
