import React from 'react';
import email from '../assets/email.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import '../App.css';

const GITHUB = 'https://github.com/bhuneke';
const LINKEDIN = 'https://www.linkedin.com/in/brigitte-huneke';
const INSTAGRAM = 'https://www.instagram.com/brighun/';


function handleClick(url) {
  window.open(`${url}`);
}

export default function IconsBar(props)  {
  return (
    <div>
      <a href='mailto:brigittehuneke@gmail.com'>
        <img src={email} className='icon' alt='email' />
      </a>
      <img src={github} className='icon' alt='github' onClick={(e) => {
        e.preventDefault();
        handleClick(GITHUB);
      }}/>
      <img src={instagram} className='icon' alt='instagram' onClick={(e) => {
        e.preventDefault();
        handleClick(INSTAGRAM);
      }}/>
      <img src={linkedin} className='icon' alt='linkedin' onClick={(e) => {
        e.preventDefault();
        handleClick(LINKEDIN);
      }}/>
    </div>
  );
}
