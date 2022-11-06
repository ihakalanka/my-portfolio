import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import { FaMouse, FaArrowRight } from 'react-icons/fa';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Haresh Akalanka</h1>
        <h5 className="text-light">Undergraduate</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          <FaMouse />
          &nbsp;
          Scroll Down
          &nbsp;
          <FaArrowRight />
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
