import React from 'react';
import email from '../assets/email.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

export default function IconsBar(props)  {
  return (
    <div>
      <img src={email} alt='email'/>
      <img src={github} alt='github'/>
      <img src={instagram} alt='instagram'/>
      <img src={linkedin} alt='linkedin'/>
    </div>
  );
}
