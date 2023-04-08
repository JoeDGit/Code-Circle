import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getConversations } from '../hooks/getConversations';
import { useAuthContext } from '../hooks/useAuthContext';
import ConversationCard from '../components/ConversationCard';
import EmptyConvoPage from '../components/EmptyConvoPage';
import styles from '../css/conversations.module.css';
import Loader from '../components/Loader';

export default function Conversations() {
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      getConversations(user.displayName).then((response) => {
        setConversations(response);
        setIsLoading(false);
      });
    }
  }, [user]);

  let router = useRouter();

  const handleRedirect = (channel, secondUser) => {
    router.push({
      pathname: `/message/${channel}`,
      query: { secondUser: `${secondUser}` },
    });
  };

  const filteredConversations = conversations?.filter((item) => {
    return item?.recipient === user?.displayName;
  });

  let grouped = {};

  filteredConversations.forEach((obj) => {
    if (grouped[obj.channel] === undefined) {
      grouped[obj.channel] = [];
      grouped[obj.channel].push(obj);
    }
  });

  if (isLoading) return <Loader />;
  if (filteredConversations?.length < 1) return <EmptyConvoPage />;
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Conversations</h1>

      <section className={styles.conversations}>
        {Object.keys(grouped).map((item, i) => (
          <div
            key={i}
            onClick={() =>
              handleRedirect(
                grouped?.[item]?.[0]?.channel,
                grouped?.[item]?.[0]?.user
              )
            }
          >
            <ConversationCard
              key={`${item}-${i}`}
              user={grouped?.[item]?.[0]?.user}
              date={grouped?.[item]?.[0]?.createdAt?.toLocaleString()}
              message={grouped?.[item]?.[0]?.message}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
