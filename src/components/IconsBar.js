import React from 'react';
import email from '../assets/email.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import '../App.css';


function handleClick(url) {
  window.open(`${url}`);
}

export default function IconsBar(props)  {
  return (
    <div>
      <img src={email} className='icon' alt='email' onClick={(e) => {
        e.preventDefault();
        handleClick('email');
      }}/>
      <img src={github} className='icon' alt='github' onClick={(e) => {
        e.preventDefault();
        handleClick('https://github.com/bhuneke');
      }}/>
      <img src={instagram} className='icon' alt='instagram' onClick={(e) => {
        e.preventDefault();
        handleClick('https://www.instagram.com/brighun/');
      }}/>
      <img src={linkedin} className='icon' alt='linkedin' onClick={(e) => {
        e.preventDefault();
        handleClick('https://www.linkedin.com/in/brigitte-huneke');
      }}/>
    </div>
  );
}
