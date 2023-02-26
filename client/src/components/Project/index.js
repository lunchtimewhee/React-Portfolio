import React from "react";

function Project({name, techStack, ghLink, imgLink}) {
  return (
    <li className="">
        <a
          href={ghLink}
          target="_blank"
          rel="noreferrer"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={'projectContainer'}
        > 
          <img src={imgLink} alt='Centiment'></img>
          {name}
          {techStack}
        </a>
    </li>
  );
}

export default Project;
