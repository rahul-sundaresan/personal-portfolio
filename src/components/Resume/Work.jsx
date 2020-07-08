import React from "react";

export default function Work(props) {

    function workDescription(descriptionItem) {
        const workDescriptionElements = descriptionItem.map((workDescriptionPoint) => <li>{workDescriptionPoint}</li>)
        return workDescriptionElements
    }

    const work = props.work.map((experienceItem) => {
        return(
            <div key={experienceItem.institution}><h3>{experienceItem.institution}</h3>
                <p className="info">{experienceItem.position}<span>&bull;</span> <em className="date">{experienceItem.duration}</em></p>
                <ul>{workDescription(experienceItem.description)}</ul>
            </div>
        )

    })
    return(
        <div className="row work">
            <div className="three columns header-col">
                <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
                {work}
            </div>
        </div>
    )

}
