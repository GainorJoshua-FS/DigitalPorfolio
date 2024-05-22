import React from 'react'

function Experience() {
    return (
        <section style={styles.section}>
            <h2 style={styles.h2}>Experience</h2>

            <h3>Proforma | Tampa, FL / Remote | Jr.Developer | 08/2022 - Present</h3>
            <ul>
                <li>Worked in QA Automation to write and fix automated tests</li>
                <li>Was a part of a development team working on a project for the company's new eCommerce website</li>
                <li>Helped a team program new training videos for their employees</li>
            </ul>

            <h3>Full Sail University | Orlando, FL | Student | 07/2019 - 03/2022</h3>
            <ul>
                <li>Creating programs in C#</li>
                <li>Creating fully functional websites using React, Node, APIs and Databases</li>
                <li>Some Game Design experience</li>
            </ul>

            <h3>Co-Pilot Tutoring Center | Orlando, FL | Shift Leader | 
                10/2021 - 03/2022
            </h3>
            <ul>
                <li>Tutoring students in C#, JavaScript, HTML, and CSS</li>
                <li>Point students in the right direction to help with their time at college</li>
            </ul>
            
            <h3>Planet Fitness | Bowie, MD | Shift Leader | 02/2016 - 06/2019</h3>
            <ul>
                <li>Contribute to high-level of customer satisfaction</li>
                <li>Training of new employees</li>
                <li>Handled cash drops at the beginning and end of every shift</li>
            </ul>
        </section>
    )
}

export default Experience

const styles ={
    section:{
        color: "#2c3160",
        textAlign: "left",
        margin: "20px 20%"
    },
    h2:{
        borderBottom: "1px solid #2c3160"
    },
    h3:{
        color: "#e15c25"
    }
}