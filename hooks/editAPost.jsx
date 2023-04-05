import { db } from '../firebase/config';
import { doc, updateDoc } from 'firebase/firestore';

export default async function editAPost(
  postId,
  newProjectDescription,
  newProgrammingLanguage,
  newWeekDayAvailability,
  newDailyAvailability,
  newTimeZone
) {
  const newPostInfo = {
    projectDescription: newProjectDescription,
    programmingLanguage: newProgrammingLanguage,
    weekDayAvailability: newWeekDayAvailability,
    dailyAvailability: newDailyAvailability,
    timeZone: newTimeZone,
  };
  await updateDoc(doc(db, 'posts', postId), newPostInfo);
}
