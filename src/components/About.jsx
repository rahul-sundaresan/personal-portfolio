import React from 'react';
import profilePic from "../assets/img/profilepic.jpg";

export default function About ({data})
{
   const resumeDownload = data.resumedownload;
   const email = data.email;
   const bio = data.bio;
   const name = data.name;

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src={profilePic} alt="Rahul Sundaresan" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>{bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>{email}</span>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href={resumeDownload} className="button"><i className="fa fa-download"/>Download Resume</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}