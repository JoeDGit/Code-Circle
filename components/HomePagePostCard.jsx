import React from 'react';
import Link from 'next/link';
import styles from '../css/posts.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { BiMessageRounded } from 'react-icons/bi';
import profilePlaceholder from '../images/profilePlaceholder.png';
import imagePlaceholder from '../images/image-placeholder.svg';
import moment from 'moment/moment';
import { useAuthContext } from '../hooks/useAuthContext';

export default function HomePagePostCard({ post, replyCountByPostId }) {
  const router = useRouter();
  const { postId } = router.query;
  const replyCountObject = Object.assign({}, ...replyCountByPostId);

  const { user } = useAuthContext();

  const date = new Date(post.postTime);
  const readableDate = date.toLocaleDateString('en-GB');
  const readableTime = date.toLocaleTimeString('en-GB').slice(0, 5);

  return (
    <div
      className="w-3/4 my-[10px] border border-[#eaeaea] rounded-[10px] p-5 drop-shadow-md cursor-pointer"
      onClickCapture={() => {
        router.push(`/posts/${post.postId}`);
      }}
    >
      <div className="flex">
        <div className="flex flex-col items-start w-full h-1/5 md:flex-row md:gap-[15px]">
          <div className="self-start">
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
          </div>
          <div className="self-start w-full h-full pt-[20px] text-[10px] md:w-[60%] md:text-[16px]">
            <div className={styles.userInfo}>
              <div
                onClick={() => {
                  router.push(`/users/${post.user}`);
                }}
                className={styles.atUser}
              >
                @{post.user} in
              </div>
              <div className={styles.programmingLanguage}>
                {post.programmingLanguage}
              </div>
              <div className={styles.time}>
                Today <span style={{ color: 'black' }}>at</span> {readableTime}
              </div>
            </div>

            <div className={styles.details}>
              <div>
                <div className={styles.title}>{post.postTitle}</div>
                <div className={styles.description}>
                  {post.projectDescription}
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
          <div className={styles.colThree}>
            <Image
              src={imagePlaceholder}
              className={styles.image}
              alt="image placeholder"
            />
          </div>
        </div>
      </div>
      <div className={styles.replies}>
        <div>
          <BiMessageRounded className={styles.messageIcon} />
        </div>
        <div>{replyCountObject[post.postId]}</div>
      </div>
    </div>
  );
}
