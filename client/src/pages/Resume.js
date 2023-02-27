import React from 'react';
import resumeFile from '../images/Anthony Li Resume 230210.pdf'

export default function Resume() {
  return (
    <div>
        <h1>Resume Page</h1>
        <p>
            Front End: React, Javascript, CSS, HTML, Handlebars
            <br></br>
            Back End: MySQL, GraphQL, MongoDB
        </p>
        
        <br></br>
        <a
            href={resumeFile}
            target="_blank"
            rel="noreferrer"
            >
            Right-Click Here and press "Save As" to Download Resume.
        </a>
    </div>
  );
}
