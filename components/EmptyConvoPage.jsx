import styles from '../css/conversations.module.css';
import { BiSad } from 'react-icons/bi';

export default function EmptyConvoPage() {
  return (
    <div className="flex flex-col items-center h-[100vh] pt-[130px]">
      <h1 className="text-center">Conversations</h1>
      <h2>
        <em>No conversations yet</em>
      </h2>
      <BiSad size={30} />
    </div>
  );
}
