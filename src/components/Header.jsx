import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelopeOpen, faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub }from '@fortawesome/free-brands-svg-icons'


export default function Header(props) {

   return (
      <header id="home" className="header">

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I'm {props.name}</h1>
               <h3><span>{props.tagline}</span></h3>
               <hr/>
               <div className="social">
                  <ul>
                     <li><a href={"mailto:" + props.personalInfo.email}><FontAwesomeIcon icon={faEnvelopeOpen}/></a></li>
                     <li><a href={"tel:"+props.personalInfo.phone}><FontAwesomeIcon icon={faPhone}/></a></li>
                     <li><a href={props.personalInfo.linkedin}><FontAwesomeIcon icon={faLinkedin}/></a></li>
                     <li><a href={props.personalInfo.github}><FontAwesomeIcon icon={faGithub}/></a></li>
                  </ul>
               </div>
               <a href="/resume.pdf" target="_blank" className="button"><FontAwesomeIcon icon={faFilePdf}/> View PDF Resume</a>


               <p className="scrolldown">
                  <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
               </p>
            </div>
         </div>

      </header>
   );
}
