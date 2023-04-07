import React, { useEffect, useState } from 'react';
import styles from '../css/userProfile.module.css';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import Image from 'next/image';
import defaultAvatar from '../images/default-avatar.svg';
import { TbMessage2 } from 'react-icons/tb';
import { AiOutlineMail } from 'react-icons/ai';
import { useAuthContext } from '../hooks/useAuthContext';
import Loader from './Loader';
import { useRouter } from 'next/router';
import languages from '../util/languageIcons';

export default function UserProfile({ userName, userNameFromParams }) {
  const [profilePageUser, setProfilePageUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuthContext();
  const router = useRouter();

  let messageChannel;

  function createChannel() {
    if (user.displayName > userNameFromParams) {
      messageChannel = userNameFromParams + user.displayName;
    } else messageChannel = user.displayName + userNameFromParams;
    return messageChannel;
  }

  useEffect(() => {
    setIsLoading(true);
    if (!userNameFromParams) return;

    async function getUser() {
      const usersCol = collection(db, 'users');
      const userQuery = query(
        usersCol,
        where('displayname', '==', `${userNameFromParams}`)
      );
      const usersSnapshot = await getDocs(userQuery);
      const usersList = usersSnapshot.docs.map((doc) => doc.data());
      return usersList;
    }
    getUser()
      .then((response) => {
        setProfilePageUser(response[0]);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userNameFromParams]);

  const isSomeoneElsesProfile = userName !== userNameFromParams;

  if (isLoading) return <Loader />;
  return (
    <main className="w-4/5 border-2 py-4 pb-10 rounded-sm drop-shadow-md">
      <div className="flex flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src={defaultAvatar}
          alt="profile"
          className="h-24 w-24 rounded-full "
        />
        {isSomeoneElsesProfile ? (
          <div>
            <button
              className="text-[#043873]"
              onClick={() =>
                router.push({
                  pathname: `/message/${createChannel()}`,
                  query: { secondUser: `${userNameFromParams}` },
                })
              }
            >
              <AiOutlineMail size={26} />
            </button>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-3xl mb-3 underline underline-offset-4">
          Languages known
        </h3>
        <div className="flex text-sm gap-2">
          {profilePageUser?.techstack?.map((tech) => {
            return (
              <div className="flex flex-col items-center" key={tech}>
                <div>{languages[tech]} </div>
                <i>{tech}</i>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
