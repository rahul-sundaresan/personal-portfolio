import React from 'react';

export default function Contact() {
    return (
        <section id="contact">
            <div className="row" >
                <h1 style={{textAlign:"center"}}>Get In Touch</h1>
            </div>
            <div className="row">
                <div className="eight columns">
                    <form method="POST" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                        <fieldset>
                            <label htmlFor="contactName">Name</label>
                            <input type="text" size="35" id="contactName" name="contactName" />

                            <label htmlFor="contactEmail">Email</label>
                            <input type="email"  size="35" id="contactEmail" name="contactEmail" />

                            <label htmlFor="contactSubject">Subject</label>
                            <input type="text"  size="35" id="contactSubject" name="contactSubject" />

                            <label htmlFor="contactMessage">Message</label>
                            <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"/>

                            <label htmlFor="submit">Ready?</label>
                            <input type="submit" id="submit" className="submit" value="Submit"/>
                     </fieldset>
                    </form>
                </div>
            </div>
        </section>
    );
}
