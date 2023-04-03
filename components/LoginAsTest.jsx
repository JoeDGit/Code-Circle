import React from 'react';
import { motion } from 'framer-motion';
import styles from '../css/login.module.css';
import { useSignin } from '../hooks/useSignin';
import { useRouter } from 'next/router';

const buttonVariants = {
  hover: {
    scale: 1.06,
  },
  tap: {
    scale: 0.99,
  },
};

export default function LoginAsTest() {
  const { signin, error } = useSignin();
  let router = useRouter();
  console.log(error);

  function redirect() {
    router.push('/home');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin('testuser@test.com', 'testuser123').then(() => redirect());
  };

  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      className={styles.button}
      onClick={handleSubmit}
    >
      Login as test user?
    </motion.button>
  );
}
