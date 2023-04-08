import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import checkLoggedIn from '../../hooks/checkLoggedIn';
import styles from '../../css/chat.module.css';
import FormSide from '../../components/FormSide';
import { useAuthContext } from '../../hooks/useAuthContext';

const AblyChatComponent = dynamic(
  () => import('../../components/AblyChatComponent'),
  { ssr: false }
);

export default function Message() {
  checkLoggedIn();
  const router = useRouter();
  const channelNum = router.query;
  const { user } = useAuthContext();

  return (
    <div className="mx-2 md:mx-0 w-full mt-60 md:mt-0 md:flex">
      <FormSide
        title={`Message ${router.query.secondUser}`}
        description="
Send a message to a fellow coder and explore the possibility of working together on coding projects."
      />
      <AblyChatComponent channelNum={channelNum} />
    </div>
  );
}
