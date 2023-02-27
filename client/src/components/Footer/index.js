import React from "react";



function Footer({name, techStack, ghLink, appLink,imgLink}) {
  return (
    <ul className="nav footerContainer">
      <li className="nav-item footerChild">
        <a
          href="https://github.com/lunchtimewhee/"
          target="_blank"
          rel="noreferrer"
          className='footerItem'
        >
          Github
        </a>
      </li>
      <li className="nav-item footerChild">
        <a
          href="https://www.linkedin.com/in/anthony-li-finance/"
          target="_blank"
          rel="noreferrer"
          className='footerItem'
        >
          LinkedIn
        </a>
      </li>
      <li className="nav-item footerChild">
        <a
          href="https://twitter.com/Anthony22407598"
          target="_blank"
          rel="noreferrer"
          className='footerItem'
        >
          Twitter
        </a>
      </li>
      
    </ul>
  );
}

export default Footer;
