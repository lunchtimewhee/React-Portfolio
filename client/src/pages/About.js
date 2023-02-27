import React from 'react';
import profilePic from '../images/profilepic.JPG'

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      
      <div className='imgContainer'>
        <img
          src={profilePic}
          alt='Anthony'
          className='profilePic'>
        </img>
      </div>
      <p>
        Hi, my name is Anthony Li and I am a fullstack developer!
      </p>
    </div>
  );
}
