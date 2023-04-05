import React from 'react';
import styles from '../css/posts.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { GoCommentDiscussion } from 'react-icons/go';
import profilePlaceholder from '../images/profilePlaceholder.png';
import moment from 'moment/moment';
import { useAuthContext } from '../hooks/useAuthContext';
import languageIcons from '../util/languageIcons';

export default function HomePagePostCard({ post, replyCountByPostId }) {
  const router = useRouter();
  const { postId } = router.query;
  const replyCountObject = Object.assign({}, ...replyCountByPostId);

  const { user } = useAuthContext();

  const dateObject = moment(post.postTime);
  const readableDate = dateObject.fromNow();

  return (
    <div className="w-3/4 my-[10px] border border-[#eaeaea] rounded-[10px] p-5 drop-shadow-md ">
      <div className="flex">
        <div className="flex flex-col  w-full h-1/5 md:flex-row md:gap-[15px]">
          <div className="flex justify-between md:block md:self-start w-full sm:w-auto">
            {post.photoURL ? (
              <Image
                src={post.photoURL}
                width={60}
                height={60}
                alt="profile"
                className="rounded-full w-[60px] h-[60px]"
                onClick={() => {
                  router.push(`/users/${user?.displayName}`);
                }}
              />
            ) : (
              <Image
                src={profilePlaceholder}
                alt="profile"
                className="rounded-full w-[60px] h-[60px]"
                onClick={() => {
                  router.push(`/users/${user?.displayName}`);
                }}
              />
            )}
            <div className="flex md:hidden self-end">
              {languageIcons[post.programmingLanguage.toLowerCase()]}
            </div>
          </div>
          <div className=" w-full h-full pt-[20px] text-[10px] md:w-[60%] md:text-[16px]">
            <div className="flex items-start">
              <div
                onClick={() => {
                  router.push(`/users/${post.user}`);
                }}
                className="font-bold mx-[5px] text-[#94a3b8]"
              >
                <span className="text-black">@{post.user}</span> in
              </div>
              <div className="font-bold mr-[5px] text-[#94a3b8]">
                {post.programmingLanguage}
              </div>
              <div className="font-bold mr-[5px] text-[#94a3b8]">
                <span className="text-black">{readableDate}</span>
              </div>
            </div>

            <div className={styles.details}>
              <div>
                <div
                  className="font-bold text-3xl mt-2.5 mb-1 cursor-pointer"
                  onClickCapture={() => {
                    router.push(`/posts/${post.postId}`);
                  }}
                >
                  {post.postTitle}
                </div>
              </div>
              <div>
                <div>
                  Time to code: {moment(post.timeToCode).format('MMMM Do YYYY')}{' '}
                  at {moment(post.timeToCode).format('HH:MM a')}
                </div>
                <div>Time zone: {post.timeZone}</div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex w-1/3 justify-end">
            {languageIcons[post.programmingLanguage.toLowerCase()]}
          </div>
        </div>
      </div>
      <div className={styles.replies}>
        <div>
          <GoCommentDiscussion
            className="text-2xl ml-1.2 text-[#52525b] cursor-pointer"
            onClick={() => {
              router.push(`/posts/${post.postId}#comments`);
            }}
          />
        </div>
        <div>{replyCountObject[post.postId]}</div>
      </div>
    </div>
  );
}
