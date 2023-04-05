import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import PostReplyForm from '../../components/postReplyForm';
import PostReplies from '../../components/PostReplies';
import { getReplies } from '../../hooks/getReplies';
import styles from '../../css/posts.module.css';
import profilePlaceholder from '../../images/profilePlaceholder.png';
import Image from 'next/image';
import moment from 'moment/moment';
import imagePlaceholder from '../../images/image-placeholder.svg';
import { IoReturnUpBackSharp } from 'react-icons/io5';
import checkLoggedIn from '../../hooks/checkLoggedIn';
import { useAuthContext } from '../../hooks/useAuthContext';
import deleteAreply from '../../hooks/deleteAreply';

async function getPosts(db) {
  const postsCol = collection(db, 'posts');
  const postsSnapshot = await getDocs(postsCol);
  const postsList = postsSnapshot.docs.map((doc) => doc.data());
  return postsList;
}

export default function SinglePost() {
  checkLoggedIn();
  const [posts, setPosts] = useState([]);
  const [replies, setReplies] = useState([]);
  const { user } = useAuthContext();

  const router = useRouter();
  const pid = router.query['pid'];

  useEffect(() => {
    getReplies().then((response) => {
      setReplies(response);
    });
  }, []);

  useEffect(() => {
    getPosts(db).then((response) => {
      setPosts(response);
    });
  }, []);

  const handleDeleteReply = (replyId) => {
    Promise.resolve(deleteAreply(replyId));
    setReplies((prevReplies) =>
      prevReplies.filter((reply) => reply.replyId !== replyId)
    );
  };

  const postToRender = posts.filter((post) => {
    return post.postId === pid;
  });

  return (
    <div className="flex flex-col items-center pt-[150px] pb-12">
      <div
        onClick={() => {
          router.push('/home');
        }}
        className="flex self-start items-center gap-2 bg-[#043873] rounded px-2 pr-3 cursor-pointer ml-4"
      >
        <IoReturnUpBackSharp color={'white'} size={20} />
        <div className="text-white font-sans">Back to all posts</div>
      </div>
      <div className="w-3/4 m-auto border border-[#eaeaea] rounded-[10px] p-5 mt-2 drop-shadow">
        <div className="flex flex-col md:gap-[15px] w-full items-start h-1/5">
          <div>
            {postToRender[0]?.photoURL ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={postToRender[0]?.photoURL}
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
                  router.push(`/users/${postToRender[0]?.user}`);
                }}
                className="text-[#043873] font-bold text-xl"
              >
                @{postToRender[0]?.user}
              </div>
              <div className="font-bold">
                in {postToRender[0]?.programmingLanguage}
              </div>
              <div className={styles.time}>
                {moment.unix(postToRender[0]?.postTime).format('HH:MM a')}
              </div>
            </div>

            <div className="flex flex-col h-full gap-8">
              <div>
                <div className="text-3xl font-bold text-sans mb-5 mt-2">
                  {postToRender[0]?.postTitle}
                </div>
                <div className="text-lg font-sans mb-2.5 mt-5">
                  {postToRender[0]?.projectDescription}
                </div>
              </div>
              <div>
                <div className="text-[14px]">
                  Availability: {postToRender[0]?.weekDayAvailability}{' '}
                  {postToRender[0]?.dailyAvailability}
                </div>
                <div className="text-[14px]">
                  Time zone: {postToRender[0]?.timeZone}
                </div>
              </div>
            </div>
          </div>
        </div>
        <PostReplyForm pid={pid} setReplies={setReplies} />
        <PostReplies
          pid={pid}
          replies={replies}
          handleDeleteReply={handleDeleteReply}
        />
      </div>
    </div>
  );
}
