import { useState } from 'react';
import { db } from '../firebase/config';
import { postReply } from '../hooks/postReply';
import { getReplies } from '../hooks/getReplies';
import { useAuthContext } from '../hooks/useAuthContext';
import styles from '../css/postReplies.module.css';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.06,
  },
  tap: {
    scale: 0.99,
  },
};

export default function PostReplyForm({ pid, setReplies }) {
  const [postReplyInput, setPostReplyInput] = useState('');

  const { user } = useAuthContext();

  function handleSubmit(e) {
    e.preventDefault();

    postReply(postReplyInput, pid, user.displayName);

    setTimeout(() => {
      getReplies(db).then((response) => {
        setPostReplyInput('');
        setReplies(response);
      });
    }, 150);
  }

  function onChangePostReply(e) {
    setPostReplyInput(e.target.value);
  }

  return (
    <div className="flex flex-col pb-12 w-full ">
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          autoFocus
          className="p-5 resize-none drop-shadow-md my-5 rounded-lg bg-[#ffffff] border-2 border-[#eaeaea]"
          onChange={onChangePostReply}
          value={postReplyInput}
          placeholder="Reply to this post"
          spellCheck="true"
          maxLength={300}
          required
        />
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="w-1/2 md:w-1/4 m-auto h-12 text-white rounded-lg bg-[#4f9cf9] cursor-pointer border-none"
        >
          Reply
        </motion.button>
      </form>
    </div>
  );
}
