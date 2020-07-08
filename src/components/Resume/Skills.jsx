import React from "react";
import "./Skills.css"

export default function Skills(props) {
    const programmingSkills = props.skills.programming.map((skill) => <button className="skillButton">{skill}</button>)
    const tools = props.skills.tools.map((skill) => <button className="skillButton">{skill}</button>)

    return(
        <div className="row work">
            <div className="three columns header-col">
                <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
                <h2>Programming</h2>
                {programmingSkills}
                <h2>Tools</h2>
                {tools}
            </div>
        </div>
    )
}
