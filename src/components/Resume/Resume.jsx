import React from 'react';
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";


export default function Resume(props) {
    return (
            <section id="resume" className={"container"}>
                <Education education={props.education}/>
                <Work work={props.work}/>
                <Skills skills={props.skills}/>
            </section>
    );
}
