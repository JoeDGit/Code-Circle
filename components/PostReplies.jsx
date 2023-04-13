import React from 'react';
import styles from '../css/postReplies.module.css';
import moment from 'moment';
import { useAuthContext } from '../hooks/useAuthContext';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.06,
  },
  tap: {
    scale: 0.99,
  },
};

export default function PostReplies({ postId, replies, handleDeleteReply }) {
  const { user } = useAuthContext();
  const router = useRouter();



  return (
    <div>
      {replies?.length ? (
        replies.map((reply) => (
          <div key={reply.replyId} className="flex flex-col w-full pb-12">
            <div className="flex items-start gap-4 border border-[#eaeaea] p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={reply.avatarURL}
                alt="profile"
                className="rounded-full h-16 w-16 cursor-pointer"
                onClick={() => router.push(`/users/${user?.displayName}`)}
              />
              <div className="flex-1">
                <div className="flex items-center">
                  <span
                    className="text-blue-500 cursor-pointer hover:underline"
                    onClick={() => router.push(`/users/${reply.user}`)}
                  >
                    {reply.user}
                  </span>
                  <span className="text-gray-500 ml-2">
                    {moment(reply.createdAt).fromNow()}
                  </span>
                </div>
                <div className="mt-2">
                  <div className={styles.reply}>{reply.message}</div>
                  {reply?.user === user?.displayName && (
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="text-white w-30 border-none rounded-lg mt-5 cursor-pointer p-1.5 bg-[#4f9cf9]"
                      onClick={() => handleDeleteReply(reply.replyId)}
                    >
                      Delete
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-gray-500">No replies yet...</div>
      )}
    </div>
  );
}
