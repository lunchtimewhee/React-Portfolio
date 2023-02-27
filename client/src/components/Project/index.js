import React from "react";

// Component for each project.

function Project({name, techStack, ghLink, appLink,imgLink}) {
  return (
    <li className="project">
          <a
            href={appLink}
            target="_blank"
            rel="noreferrer"
            className={'projectInner'}
          > 
            <img 
              src={imgLink} 
              alt='Centiment'
              className='projectImg'>
            </img>
          
          </a>
              
          <div className='projectText'>
            {name}
            <br></br>
            {techStack}
            <br></br>
            <a
              href={ghLink}
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
        </div>
    </li>
  );
}

export default Project;
