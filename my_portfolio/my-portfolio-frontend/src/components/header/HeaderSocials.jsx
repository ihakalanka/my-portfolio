import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaHackerrank } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/haresh-akalanka-7259b41aa/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/ihakalanka" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.hackerrank.com/ihakalanka19" target="_blank" rel="noreferrer" ><FaHackerrank /></a>
    </div>
  )
}

export default HeaderSocials