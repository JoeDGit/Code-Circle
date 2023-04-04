import { useState } from 'react';
import { useSignin } from '../hooks/useSignin';
import { useRouter } from 'next/router';
import styles from '../css/login.module.css';
import logo from '../images/Logo.svg';
import Image from 'next/image';

import { motion } from 'framer-motion';
import Link from 'next/link';
import LoginAsTest from './LoginAsTest';

const buttonVariants = {
  hover: {
    scale: 1.06,
  },
  tap: {
    scale: 0.99,
  },
};

export default function LoginForm() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const { signin, error } = useSignin();

  let router = useRouter();
  function redirect() {
    router.push('/home');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    signin(emailInput, passwordInput);
    redirect();
  };
  return (
    <main className="container flex flex-col items-center justify-center ml-2 md:w-1/2 gap-[30px] md:h-[75vh] py-[50px] md:pt-[100px]">
      <div className="flex flex-col text-center items-center">
        <div className="bg-[#043873] p-2 pr-5 rounded mb-4">
          <Image
            className="cursor-pointer"
            alt="logo"
            src={logo}
            onClick={() => {
              router.push('/');
            }}
          />
        </div>

        <h1 className="text-4xl font-bold">Login</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            autoComplete="email"
            className="w-[312px] h-[50px] border border-[#dbdbdb] rounded-[15px] bg-[#fafafa] py-0 px-3 mb-4 text-[14px] mr-2"
            type="text"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmailInput(e.target.value);
            }}
            required
          />

          <input
            autoComplete="current-password"
            className="w-[312px] h-[50px] border border-[#dbdbdb] rounded-[15px] bg-[#fafafa] py-0 px-3 mb-4 text-[14px] mr-2"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPasswordInput(e.target.value);
            }}
          />
          <Link
            className="decoration-none text-[#4f9cf9]"
            href="/reset-password"
          >
            Forgot Password?
          </Link>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex justify-center items-center w-60 h-12 md:w-[312px] md:h-[64px] border border-[#dbdbdb] rounded-[15px] bg-[#043873] text-[#ffff] px-0 text-[14px] cursor-pointer my-2"
          >
            Login
          </motion.button>
          <LoginAsTest />
          <div>
            {`Don't have an account?`}{' '}
            <Link
              className="decoration-none text-[#4f9cf9]"
              href="/create-an-account"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
