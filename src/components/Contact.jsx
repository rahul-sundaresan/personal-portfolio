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
                    <form method="POST" name="contact" netlify>
                    <fieldset>
                        <div>
                        <label htmlFor="contactName">Name</label>
                        <input type="text" size="35" id="contactName" name="contactName" />
                        </div>
                        <div>
                        <label htmlFor="contactEmail">Email</label>
                        <input type="email"  size="35" id="contactEmail" name="contactEmail" />
                        </div>
                        <div>
                        <label htmlFor="contactSubject">Subject</label>
                        </div>
                        <div>
                        <label htmlFor="contactMessage">Message</label>
                        </div>
                        <div>
                        <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                        </div>
                        <div>
                            <input type="submit" className="submit">Submit</input>
                        </div>
                    </fieldset>
                    </form>
                </div>
            </div>
        </section>
    );
}