import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelopeOpen, faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub }from '@fortawesome/free-brands-svg-icons'
import headerStyle from "./header.module.css"
export default function Header(props) {

    return (
        <header id="home" className="header">
            <div className="row banner">
                <div className="banner-text">
                    <h1 className={headerStyle.title}>{"I am " + props.name}</h1>
                    <p className={headerStyle.missionStatement}>{props.tagline}</p>
                    <hr/>
                    <div className="social">
                        <ul>
                            <li><a href={"mailto:" + props.personalInfo.email}><FontAwesomeIcon icon={faEnvelopeOpen}/></a></li>
                            <li><a href={"tel:"+props.personalInfo.phone}><FontAwesomeIcon icon={faPhone}/></a></li>
                            <li><a href={props.personalInfo.linkedin}><FontAwesomeIcon icon={faLinkedin}/></a></li>
                            <li><a href={props.personalInfo.github}><FontAwesomeIcon icon={faGithub}/></a></li>
                        </ul>
                    </div>
                    <hr/>
                    <a href="/resume.pdf" target="_blank" className="button"><FontAwesomeIcon icon={faFilePdf}/> View PDF Resume</a>

                </div>
            </div>
        </header>
    );
}
