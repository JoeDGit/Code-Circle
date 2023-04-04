import { useState } from 'react';
import logo from '../images/Logo.svg';
import Image from 'next/image';
import { auth } from '../firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';
import Link from 'next/link';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.06,
  },
  tap: {
    scale: 0.99,
  },
};

export default function ForgotPasswordForm() {
  const [emailInput, setEmailInput] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);

    sendPasswordResetEmail(auth, emailInput)
      .then(() => {
        setResetSent(true);
      })
      .catch((error) => {
        setIsError(true);
      });
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

        <h1 className="text-4xl font-bold">Forgot Password</h1>
      </div>
      <div>
        {resetSent ? (
          <div className="flex flex-col items-center">
            <p className="text-lg mb-4">Password reset sent!</p>
            <Link className="decoration-none text-[#4f9cf9]" href="/login">
              Return to login
            </Link>
          </div>
        ) : (
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

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex justify-center items-center w-60 h-12 md:w-[312px] md:h-[64px] border border-[#dbdbdb] rounded-[15px] bg-[#043873] text-[#ffff] px-0 text-[14px] cursor-pointer my-2"
            >
              Send Reset Email
            </motion.button>

            {isError && (
              <div className="text-rose-500">
                There is no account associated with that email!
              </div>
            )}
            <div>
              <Link className="decoration-none text-[#4f9cf9]" href="/login">
                Return to login
              </Link>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
