import React from 'react';
import styles from '../css/profilePagePostCard.module.css';
import Image from 'next/image';
import profilePlaceholder from '../images/profilePlaceholder.png';
import deleteAPost from '../hooks/deleteAPost';
import editAPost from '../hooks/editAPost';
import { useRouter } from 'next/router';
import { useState } from 'react';
import LanguageSelect from './LanguageSelect';

export default function ProfilePagePostCard({ props, userName }) {
  const {
    postId,
    postTime,
    postTitle,
    programmingLanguage,
    projectDescription,
    weekDayAvailability,
    dailyAvailability,
    timeZone,
    user,
    photoURL,
  } = props;
  const date = new Date(postTime);
  const readableDate = date.toLocaleDateString('en-GB');
  const readableTime = date.toLocaleTimeString('en-GB').slice(0, 5);

  const [isPostBeingEdited, setIsPostBeingEdited] = useState(false);
  const [editProjectDescription, setEditProjectDescription] =
    useState(projectDescription);
  const [editProgrammingLanguage, setEditProgrammingLanguage] =
    useState(programmingLanguage);
  const [editWeekDayAvailability, setEditWeekDayAvailability] =
    useState(weekDayAvailability);
  const [editDailyAvailability, setEditDailyAvailability] =
    useState(dailyAvailability);
  const [editTimeZone, setEditTimeZone] = useState(timeZone);

  const weeklyAvailability = [
    'Weekdays (Mon-Fri)',
    'Weekends (Sat-Sun)',
    'Anytime',
    'Flexible (varying availability)',
  ];

  const timesOfDay = [
    'Mornings (6am - 12pm)',
    'Afternoons (12pm - 6pm)',
    'Evenings (6pm - 12am)',
    'Night (12am - 6am)',
    'Anytime (24/7)',
    'Flexible (varying availability)',
  ];

  const router = useRouter();

  function handleEditPost() {
    setIsPostBeingEdited(true);
  }

  function handleCancelEditPost() {
    setIsPostBeingEdited(false);
  }

  function handleUpdatePost() {
    editAPost(
      postId,
      editProjectDescription,
      editProgrammingLanguage,
      editDailyAvailability,
      editWeekDayAvailability,
      editTimeZone
    );
    setIsPostBeingEdited(false);
    setTimeout(() => {
      router.push(`/users/${userName}`);
    }, 1500);
  }

  function handleDeletePost() {
    deleteAPost(postId);
    setTimeout(() => {
      router.push(`/users/${userName}`);
    }, 1500);
  }

  function onChangeEditProjectDescription(event) {
    setEditProjectDescription(event.target.value);
  }

  function OnChangeEditLanguage(event) {
    setEditProgrammingLanguage(event.target.value);
  }
  function OnChangeTimeZone(event) {
    setEditTimeZone(event.target.value);
  }

  return (
    <div className={styles.profileCardContainer}>
      <div className={styles.title}>{postTitle}</div>

      <div className={styles.postInfo}>
        {isPostBeingEdited ? (
          <label>
            Update programming language:
            <LanguageSelect
              selectedLanguages={editProgrammingLanguage}
              setSelectedLanguages={setEditProgrammingLanguage}
            />
          </label>
        ) : (
          <div>Language: {editProgrammingLanguage}</div>
        )}

        <br />

        {isPostBeingEdited ? (
          <label>
            Choose availability :
            <select
              value={weekDayAvailability}
              onChange={(e) => setEditWeekDayAvailability(e.target.value)}
              className="border p-2"
            >
              {weeklyAvailability.map((availabilityOption) => {
                return (
                  <option key={availabilityOption}>{availabilityOption}</option>
                );
              })}
            </select>
            <select
              className="border p-2"
              value={dailyAvailability}
              onChange={(e) => setEditDailyAvailability(e.target.value)}
            >
              {timesOfDay.map((availableTime) => {
                return <option key={availableTime}>{availableTime}</option>;
              })}
            </select>
          </label>
        ) : (
          <div>
            Availability: {dailyAvailability} {weekDayAvailability}
          </div>
        )}

        <br />

        {isPostBeingEdited ? (
          <label>
            Choose a time zone :
            <select name="Time-zone" onChange={OnChangeTimeZone}>
              <option value="GMT">GMT</option>
              <option value="UTC">UTC</option>
              <option value="PST">PST</option>
              <option value="UTC">UTC</option>
              <option value="ET">ET</option>
              <option value="CT">CT</option>
              <option value="PT">PT</option>
            </select>
          </label>
        ) : (
          <div>Time zone:{editTimeZone}</div>
        )}

        {isPostBeingEdited ? <div>Enter new project description:</div> : null}
        {isPostBeingEdited ? (
          <textarea
            className={styles.textarea}
            name="edit-project-description"
            onChange={onChangeEditProjectDescription}
            placeholder={editProjectDescription}
          ></textarea>
        ) : (
          <div>{projectDescription}</div>
        )}
        <div>
          Created: {readableDate} at {readableTime}{' '}
        </div>
        <div className={styles.buttons}>
          {isPostBeingEdited ? (
            <button onClick={handleCancelEditPost} className={styles.button}>
              Cancel Editing
            </button>
          ) : ( user === userName &&
            <button onClick={handleEditPost} className={styles.button}>
              Edit Post
            </button>
          )}
          {isPostBeingEdited ? (
            <button onClick={handleUpdatePost} className={styles.button}>
              Update Post
            </button>
          ) : null}
          {(user === userName && <button onClick={handleDeletePost} className={styles.button}>
            Delete Post
          </button>)}
        </div>
      </div>
    </div>
  );
}
