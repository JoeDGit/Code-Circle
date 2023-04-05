import React from 'react';
import { motion } from 'framer-motion';
import styles from '../css/login.module.css';
import { useSignin } from '../hooks/useSignin';
import { useRouter } from 'next/router';
import Button from './Button';

const buttonVariants = {
  hover: {
    scale: 1.06,
  },
  tap: {
    scale: 0.99,
  },
};

export default function LoginAsTest({ nav }) {
  const { signin, error } = useSignin();
  let router = useRouter();
  function redirect() {
    router.push('/home');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin('testuser@test.com', 'testuser123').then(() => redirect());
  };

  if (nav) {
    return (
      <Button
        label="Login as test user"
        type="secondary"
        size="medium"
        onClick={handleSubmit}
      />
    );
  }

  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      className="flex justify-center items-center w-60 md:w-[312px] h-12 md:h-[64px] border border-[#dbdbdb] rounded-[15px] bg-[#043873] text-[#ffff] px-0 text-[14px] cursor-pointer"
      onClick={handleSubmit}
    >
      Login as test user?
    </motion.button>
  );
}
