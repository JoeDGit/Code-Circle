import { useEffect, useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { postUser } from '../hooks/postUser';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styles from '../css/login.module.css';
import Image from 'next/image';
import logo from '../images/Logo.svg';
import Link from 'next/link';
import LoaderButton from './LoaderButton';
import LanguageSelect from './LanguageSelect';
import LoginAsTest from './LoginAsTest';

const buttonVariants = {
  hover: {
    scale: 1.06,
  },
  tap: {
    scale: 0.99,
  },
};

export default function SignupForm() {
  const [displayNameInput, setDisplayNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [photoUrl, setPhotoUrl] = useState('');
  const [thumbnailError, setThumbnailError] = useState(null);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const { signup, error, isPending } = useSignup();
  const router = useRouter();

  useEffect(() => {
    switch (error) {
      case 'Firebase: Error (auth/email-already-in-use).':
        setErrorMessage('Email already in use');
        break;
      case 'Firebase: Error (auth/invalid-email).':
        setErrorMessage('Invalid email');
        break;
      case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
        setErrorMessage('Password should be at least 6 characters');
        break;
      default:
        setErrorMessage(null);
        break;
    }
  }, [error]);

  useEffect(() => {
    if (isPending === false && error === null) {
      router.push('/home');
    }
  }, [error, isPending, router]);

  const handleDisplayNameInput = (e) => {
    setDisplayNameInput(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value);
    if (e.target.value === '') {
      setEmailInput(null);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedLanguages.length < 1) {
      setErrorMessage('Please Select your known programming languages');
      return;
    }
    if (!thumbnail) {
      setErrorMessage('Please Upload a profile picture');
      return;
    }
    postUser(displayNameInput, selectedLanguages);
    signup(emailInput, passwordInput, displayNameInput, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selectedAvatar = e.target.files[0];

    if (!selectedAvatar) {
      setThumbnailError('Please select a profile image');
      return;
    }
    if (!selectedAvatar.type.includes('image')) {
      setThumbnailError('Selected file must be an image');
      return;
    }
    if (selectedAvatar.size > 1000000) {
      setThumbnailError('Image file size must be less than 10mb');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPhotoUrl(reader.result);
    };
    reader.readAsDataURL(selectedAvatar);

    setThumbnailError(null);
    setThumbnail(selectedAvatar);
  };

  return (
    <main
      className={
        'container flex flex-col items-center justify-center ml-2 md:w-1/2 gap-[30px] md:h-[75vh] py-[50px] md:pt-[100px]'
      }
    >
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

        <h1 className="text-3xl font-bold">Create an Account</h1>
      </div>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          className="w-[312px] h-[50px] border border-[#dbdbdb] rounded-[15px] bg-[#fafafa] py-0 px-3 mb-4 text-[14px]"
          type="text"
          placeholder="Enter a username"
          value={displayNameInput}
          onChange={handleDisplayNameInput}
          required
        />

        <input
          className="w-[312px] h-[50px] border border-[#dbdbdb] rounded-[15px] bg-[#fafafa] py-0 px-3  text-[14px]"
          type="email"
          placeholder="Enter your email"
          value={emailInput}
          onChange={handleEmailInput}
          required
        />
        <LanguageSelect
          selectedLanguages={selectedLanguages}
          setSelectedLanguages={setSelectedLanguages}
        />

        <input
          className="w-[312px] h-[50px] border border-[#dbdbdb] rounded-[15px] bg-[#fafafa] py-0 px-3 mb-4 text-[14px]"
          type="password"
          placeholder="Enter your password"
          value={passwordInput}
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
          required
        />

        <label className={styles.label}>
          <span>Add Profile Image</span>
          <input
            type="file"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
        </label>
        {thumbnailError && (
          <div className="text-red-600 mb-2">{thumbnailError}</div>
        )}
        {photoUrl && (
          <div className="flex items-center gap-10 mb-2">
            <p>Profile Image Preview:</p>
            <Image
              width="60"
              height="60"
              src={photoUrl}
              alt="Profile Preview"
            />
          </div>
        )}

        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className={styles.button}
        >
          {isPending ? <LoaderButton /> : 'Sign Up'}
        </motion.button>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

        <Link className={styles.forgotPassword} href="/">
          Forgot Password?
        </Link>

        <div className="mb-6 mt-2">
          {`Already have an account?`}{' '}
          <Link className={styles.forgotPassword} href="/login">
            Login
          </Link>
        </div>
        <LoginAsTest />
      </form>
    </main>
  );
}
