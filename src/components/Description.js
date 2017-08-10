import React from 'react';

export default function Description() {
  return (
    <div>
      <p>
        Hi there. I’m Brigitte. 
      </p>
      <br/>
      <p>I am a front-end JavaScript developer with full-stack skills and design experience.
        I recently moved back to Austin from Portland. I cannot tell you how excited I am about sunshine and tacos.</p>
      <br/>
      <div className='project'>
        <h4>FEATURED PROJECT:</h4>
        <p>your mood, hued</p>
        <a href='https://colordiary.herokuapp.com/'>
          <div className='color-diary'>
            <div className='color-box blue'></div>
            <div className='color-box green'></div>
            <div className='color-box yellow'></div>
            <div className='color-box red'></div>
          </div>
        </a>
      </div>
      <br/>
      <p>More to come, but in the meantime -</p>
      <h3>
        SAY HI!
      </h3>
    </div>
  );
}
