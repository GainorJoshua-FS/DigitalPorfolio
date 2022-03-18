import React from 'react'

function ProjectHelper(props) {
    return (
        <article>
            <h3>{props.title}</h3>
            <img src={props.src} alt={props.alt} />
            <p>{props.desc}</p>
        </article>
    )
}

export default ProjectHelper
