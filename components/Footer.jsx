import React from 'react';
import styles from '../css/footer.module.css';
import Image from 'next/image';
import logo from '../images/Logo.svg';
import Button from './Button';
import arrow from '../images/arrow.svg';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="w-full bg-[#043873] text-[#ffffff] text-center static mt-[83px] py-4 px-4 md:py-10 md:px-6">
      <div className="flex w-[85%] text-left gap-4 md:w-full ">
        <div className="flex justify-between">
          <div>
            <Image className="mb-4" alt="logo" src={logo} />
            <p className="font-sans ml-4">
              Code Circle was created for the new ways we live and work. <br /> We make
              a better workspace around the world.
            </p>
          </div>
        </div>
        <div className="items-center w-full flex justify-end">
          <Button
            label="Github Repository"
            image={arrow}
            href={'https://github.com/JoeDGit/code-circle'}
            target="_blank"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="ml-4">
          <p>© 2023 Code Circle. All rights reserved.</p>
        </div>
        <div className="flex gap-2 items-center">
          <a href="https://www.facebook.com/">
            <BsFacebook />
          </a>
          <a href="https://www.instagram.com/">
            <BsInstagram  />
          </a>
          <a href="https://twitter.com/">
            <BsTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
