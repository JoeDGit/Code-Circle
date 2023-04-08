import React from 'react';
import defaultAvatar from '../images/default-avatar.svg';
import Image from 'next/image';

import styles from '../css/conversation-card.module.css';

export default function ConversationCard({ user, date, message }) {
  return (
    <div className="flex items-center  cursor-pointer md:pl-4 px-2 py-5 bg-[#fafafa] border-bottom border-[#e0e0e0] w-11/12 m-auto">
      <div className="flex w-full justify-start overflow-hidden gap-2 mr-2">
        <div className="h-[45px] w-[45px]">
          <Image
            className="rounded-full border border-[#043873]"
            src={defaultAvatar}
            alt="user avatar"
            width={50}
            height={50}
          />

          <div className="relative top-[-15px] left-[30px] md:left-[35px] w-3 h-3 bg-[#8bc34a] rounded-full border-2 border-[#fafafa]"></div>
        </div>

        <div className=" overflow-ellipsis overflow-hidden whitespace-nowrap">
          <p className="text-sans text-2xl md:ml-4">
            <em>{user}</em>
          </p>
          <p className="md:ml-4 font-sans text-[#515151] text-sm overflow-hidden overflow-ellipsis whitespace-nowrap">
            {message}
          </p>
        </div>
      </div>
      <div className="text-center font-sans text-[10px] text-[#bbb] px-2 py-2 bg-[#fff] rounded-[15px] border border-[#e5e5e5]">
        {date}
      </div>
    </div>
  );
}
