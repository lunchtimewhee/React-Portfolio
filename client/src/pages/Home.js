import React from 'react';
import Project from '../components/Project'
import centimentPic from '../images/centiment.JPG';
import passwordGenPic from '../images/password-generator.jpg';
import jatePic from '../images/jate.JPG';
import taylorsKitchenPic from '../images/taylors-kitchen.jpg';
import schedulerPic from '../images/workday-scheduler.jpg';
import ecommercePic from '../images/ecommerce.JPG';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Welcome to Anthony Li's portfolio!
      </p>
      
      <ul className='projectContainer'>
        <Project name={'Centiment'} techStack={'Handlebars, JS, CSS, HTML'} ghLink={'https://github.com/isayahdurst/centiment'} appLink={'https://centiment-inc.herokuapp.com/login'} imgLink={centimentPic}/>

        <Project name={`Taylor's Kitchen`} techStack={'JS, CSS, HTML'} ghLink={'https://github.com/isayahdurst/taylors-kitchen-meal-prep-app'} appLink={'https://isayahdurst.github.io/taylors-kitchen-meal-prep-app/'} imgLink={taylorsKitchenPic}/>

        <Project name={`Online Text Editor`} techStack={'JS, CSS, HTML'} ghLink={'https://github.com/lunchtimewhee/online-text-editor'} appLink={'https://online-text-editor.herokuapp.com/'} imgLink={jatePic}/>

        <Project name={`Password Generator`} techStack={'JS, CSS, HTML'} ghLink={'https://github.com/lunchtimewhee/Password_Generator'} appLink={'https://lunchtimewhee.github.io/Password_Generator/'} imgLink={passwordGenPic}/>

        <Project name={`Workday Scheduler`} techStack={'JS, CSS, HTML'} ghLink={'https://github.com/lunchtimewhee/work_day_scheduler'} appLink={'https://lunchtimewhee.github.io/work_day_scheduler/'} imgLink={schedulerPic}/>

        <Project name={`E-Commerce Backend`} techStack={'JS'} ghLink={'https://github.com/lunchtimewhee/ecommerce-backend'} appLink={'https://github.com/lunchtimewhee/ecommerce-backend'} imgLink={ecommercePic}/>
      </ul>
      

    </div>
  );
}
