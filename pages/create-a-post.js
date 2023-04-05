import { useState } from 'react';
import { createAPost } from '../hooks/useCreateAPost';
import { useRouter } from 'next/router';
import { useAuthContext } from '../hooks/useAuthContext';
import styles from '../css/createPost.module.css';
import { motion } from 'framer-motion';
import LoaderButton from '../components/LoaderButton';
import LanguageSelect from '../components/LanguageSelect';

const buttonVariants = {
  hover: {
    scale: 1.06,
  },
  tap: {
    scale: 0.99,
  },
};
import checkLoggedIn from '../hooks/checkLoggedIn';

export default function CreateAPost() {
  const { user } = useAuthContext();

  const [postTitleInput, setPostTitleinput] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [programmingLanguage, setProgrammingLanguage] = useState('HTML');
  const [timeToCode, setTimeToCode] = useState('');
  const [timeZone, setTimeZone] = useState('GMT');
  const [loading, setLoading] = useState(false);
  checkLoggedIn();

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    createAPost(
      user.displayName,
      user.photoURL,
      postTitleInput,
      projectDescription,
      programmingLanguage,
      timeToCode,
      timeZone
    );
    setLoading(true);
    setTimeout(() => {
      router.push('/home');
    }, 1500);
  }

  function HandlePostTitleInput(e) {
    setPostTitleinput(e.target.value);
  }

  function HandleProjectDescription(e) {
    setProjectDescription(e.target.value);
  }

  function handleOnChangeLanguage(e) {
    setProgrammingLanguage(e.target.value);
  }

  function handleOnChangeTimeZone(e) {
    setTimeZone(e.target.value);
  }

  function handleChooseTimeToCode(e) {
    setTimeToCode(e.target.value);
  }

  return (
    <div className={styles.container}>
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          className={styles.input}
          type="text"
          value={postTitleInput}
          onChange={HandlePostTitleInput}
          required
          placeholder="Enter a title for your project"
          autoFocus
        />

        <textarea
          name="project-description"
          value={projectDescription}
          onChange={HandleProjectDescription}
          required
          placeholder="Enter a description for your project"
          spellCheck="true"
          className={styles.textarea}
        />

        <label className={styles.inputContainer}>
          Choose the main language for the project :
          <LanguageSelect
            customStyle={'md:w-1/2 w-5/6'}
            selectedLanguages={programmingLanguage}
            setSelectedLanguages={setProgrammingLanguage}
          />
        </label>

        <label className={styles.inputContainer}>
          Choose a time to code :
          <input
            className={styles.input}
            type="datetime-local"
            name="meeting-time"
            onChange={handleChooseTimeToCode}
          />
        </label>
        <label className={styles.inputContainer}>
          Choose a time zone :
          <select
            name="Time-zone"
            onChange={handleOnChangeTimeZone}
            className={styles.select}
          >
            <option value="GMT">GMT</option>
            <option value="UTC">UTC</option>
            <option value="PST">PST</option>
            <option value="UTC">UTC</option>
            <option value="ET">ET</option>
            <option value="CT">CT</option>
            <option value="PT">PT</option>
          </select>
        </label>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className={styles.button}
        >
          {loading ? <LoaderButton /> : 'Add Post'}
        </motion.button>
      </form>
    </div>
  );
}
