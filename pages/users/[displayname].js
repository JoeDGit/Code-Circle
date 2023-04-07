import React, { useEffect, useState } from 'react';
import styles from '../../css/userProfile.module.css';
import { useRouter } from 'next/router';
import UserProfile from '../../components/UserProfile';
import { useAuthContext } from '../../hooks/useAuthContext';
import PastPosts from '../../components/PastPosts';
import checkLoggedIn from '../../hooks/checkLoggedIn';

export default function OtherUserProfile() {
  checkLoggedIn();
  const { user } = useAuthContext();
  const router = useRouter();
  const userNameFromParams = router.query.displayname;

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>{userNameFromParams}&apos;s Profile</h1>
      <UserProfile
        userName={user?.displayName}
        userNameFromParams={userNameFromParams}
      />
      <PastPosts userName={user?.displayName} />
    </div>
  );
}
