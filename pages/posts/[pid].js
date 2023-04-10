import React from 'react';
import { useRouter } from 'next/router';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import PostReplyForm from '../../components/postReplyForm';
import PostReplies from '../../components/PostReplies';
import { getReplies } from '../../hooks/getReplies';
import styles from '../../css/posts.module.css';
import profilePlaceholder from '../../images/profilePlaceholder.png';
import Image from 'next/image';
import moment from 'moment/moment';
import { AiOutlineMail } from 'react-icons/ai';
import { IoReturnUpBackSharp } from 'react-icons/io5';
import checkLoggedIn from '../../hooks/checkLoggedIn';
import { useAuthContext } from '../../hooks/useAuthContext';
import deleteAreply from '../../hooks/deleteAreply';

export async function getServerSideProps({ params }) {
  const postDoc = doc(db, 'posts', params.pid);
  const postSnapshot = await getDoc(postDoc);
  const postData = postSnapshot.data();

  const repliesCollection = collection(db, 'replies');
  const q = query(repliesCollection, where('postId', '==', params.pid));
  const repliesSnapshot = await getDocs(q);
  const replies = repliesSnapshot.docs.map((doc) => doc.data());
  return { props: { postData, replies } };
}
export default function SinglePost({ postData, replies }) {
  checkLoggedIn();
  const { user } = useAuthContext();

  const router = useRouter();
  const pid = router.query['pid'];

  const handleDeleteReply = (replyId) => {
    Promise.resolve(deleteAreply(replyId));
    setReplies((prevReplies) =>
      prevReplies.filter((reply) => reply.replyId !== replyId)
    );
  };

  const dateObject = moment(postData.postTime);
  const readableDate = dateObject.fromNow();

  return (
    <div className="flex flex-col items-center pt-[150px] pb-12">
      <div
        onClick={() => {
          router.push('/home');
        }}
        className="flex self-start items-center gap-2 bg-[#4f9cf9] rounded px-2 pr-3 cursor-pointer ml-4"
      >
        <IoReturnUpBackSharp color={'white'} size={20} />
        <div className="text-white font-sans">Back to all posts</div>
      </div>
      <div className="w-3/4 m-auto border border-[#eaeaea] rounded-[10px] p-5 mt-2 drop-shadow">
        <div className="flex flex-col md:gap-[15px] w-full items-start h-1/5">
          <div>
            {postData.photoURL ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={postData.photoURL}
                alt="profile "
                className="rounded-full w-[60px] h-[60px] md:w-[150px] md:h-[150px] cursor-pointer"
                onClick={() => {
                  router.push(`/users/${user?.displayName}`);
                }}
              />
            ) : (
              <Image
                src={profilePlaceholder}
                alt="profile"
                onClick={() => {
                  router.push(`/users/${user?.displayName}`);
                }}
                className="rounded-full w-[60px] h-[60px] md:w-[150px] md:h-[150px] cursor-pointer"
              />
            )}
          </div>
          <div className="self-start w-full h-full text-[10px] md:text-[16px]">
            <div className="flex flex-col  md:mb-4 md:mt-0 md:ml-4">
              <div
                onClick={() => {
                  router.push(`/users/${postData.user}`);
                }}
                className="text-[#4f9cf9] font-bold text-xl cursor-pointer w-fit"
              >
                @{postData.user}
              </div>

              <div className="font-bold">in {postData.programmingLanguage}</div>
              <div className={styles.time}>{readableDate}</div>
              <div className="text-2xl cursor-pointer w-fit">
                <AiOutlineMail />
              </div>
            </div>

            <div className="flex flex-col h-full gap-8">
              <div>
                <div className="text-3xl font-bold text-sans mb-5 mt-2">
                  {postData.postTitle}
                </div>
                <div className="text-lg font-sans mb-2.5 mt-5">
                  {postData.projectDescription}
                </div>
              </div>
              <div>
                <div className="text-[14px]">
                  Availability: {postData.weekDayAvailability}{' '}
                  {postData.dailyAvailability}
                </div>
                <div className="text-[14px]">
                  Time zone: {postData.timeZone}
                </div>
              </div>
            </div>
          </div>
        </div>
        <PostReplyForm pid={pid} />
        <PostReplies
          pid={pid}
          replies={replies}
          handleDeleteReply={handleDeleteReply}
        />
      </div>
    </div>
  );
}
