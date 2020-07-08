import React from "react";
import YAMLData from "../../../content/resume-data.yaml"

export default function Education(props) {
    const education = props.education.map((educationItem) => {
            return(
                <div key={educationItem.degree}><h3>{educationItem.institution}</h3>
                    <p className="info">{educationItem.degree} <span>&bull;</span><em
                        className="date">{educationItem.duration}</em></p>
                    <p>GPA: {educationItem.gpa}</p>
                </div>
            )})
    return(
        <div className="row education">
            <div className="three columns header-col">
                <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
                <div className="row item">
                    <div className="twelve columns">
                        {education}
                    </div>
                </div>
            </div>
        </div>
    )

}

