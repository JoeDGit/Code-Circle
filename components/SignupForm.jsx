import { useEffect, useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { postUser } from '../hooks/postUser';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styles from '../css/login.module.css';
import Image from 'next/image';
import logo from '../images/Logo_Icon.svg';
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
    <main className={styles.container}>
      <div className={styles.header}>
        <Image
          className={styles.logoStyle}
          alt="logo"
          src={logo}
          onClick={() => {
            router.push('/');
          }}
        />

        <h1 className="text-3xl font-bold">Create an Account</h1>
      </div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          className={styles.inputStyle}
          type="text"
          placeholder="Enter a username"
          value={displayNameInput}
          onChange={handleDisplayNameInput}
          required
        />

        <br />

        <input
          className={styles.inputStyle}
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

        <br />

        <input
          className={styles.inputStyle}
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

        <div>
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
