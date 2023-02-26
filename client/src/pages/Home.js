import React from 'react';
import Project from '../components/Project'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Welcome to Anthony Li's portfolio!
      </p>
      
      <ul className='flex'>
        <Project name={'Centiment'} techStack={'Handlebars, JS, CSS, HTML'} ghLink={'https://github.com/isayahdurst/centiment'} imgLink={'https://miro.medium.com/freeze/max/1160/1*t_G1kZwKv0p2arQCgYG7IQ.gif'}/>
      </ul>
      

    </div>
  );
}
