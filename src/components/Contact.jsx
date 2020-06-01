import React from 'react';

export default function Contact() {
   return (
      
      <section id="contact">
         <div className="row section-head">
               <div className="two columns header-col">
                  <h1><span>Get In Touch.</span></h1>
               </div>
            </div>
         <div className="row">
               <div className="eight columns">
                  <form method="post" id="contactForm" name="contactForm" data-netlify="true">
                  <fieldset>
                     <div>
                        <label htmlFor="contactName">Name</label>
                        <input type="text" defaultValue="" size="35" id="contactName" name="contactName" />
                     </div>

                     <div>
                        <label htmlFor="contactEmail">Email</label>
                        <input type="email" defaultValue="" size="35" id="contactEmail" name="contactEmail" />
                     </div>

                     <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject"/>
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"/>
                     </div>
                     <div>
                        <button type="submit" className="submit">Submit</button>
                     </div>
                  </fieldset>
                  </form>
            </div>
         </div>
      </section>
    );
}