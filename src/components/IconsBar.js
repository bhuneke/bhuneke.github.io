import React from 'react';
import email from '../assets/email.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import '../App.css';

export default function IconsBar(props)  {
  return (
    <div>
      <img src={email} className='icon' alt='email'/>
      <img src={github} className='icon' alt='github'/>
      <img src={instagram} className='icon' alt='instagram'/>
      <img src={linkedin} className='icon' alt='linkedin'/>
    </div>
  );
}
