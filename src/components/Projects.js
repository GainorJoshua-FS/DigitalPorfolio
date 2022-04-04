import React from 'react'
import ProjectHelper from '../helpers/ProjectHelper'
import ProjectHelperWide from '../helpers/ProjectHelperWide'
import GndHome from '../images/GndHome.png'
import GndInfo from '../images/GndInfo.png'
import KanHome from '../images/KanbanHome.png'
import KanNew from '../images/KanbanNew.png'
import QuizHome from '../images/QuizHome.png'
// import QuizTest from '../images/QuizTest.png'

function Projects() {
    return (
        <section style={styles.section}>
            <h2 style={styles.h2}>My Projects</h2>
            <div style={styles.div}>
                <ProjectHelper
                    title="Game Night Debut" src={GndHome} alt="A Boardgame app's home page" src2={GndInfo} alt2="A boardgame app's description page of a boardgame" desc="A mobile first React/Node based application that pulls from an API with a custom backend Postgres database." git="https://github.com/ePortfolios/WDD4416-2201-GainorJoshua" page="/gamenight"
                />
                <ProjectHelper
                    title="JQG Kanban Board" src={KanHome} alt="A Kanban board website" src2={KanNew} alt2="The Kanban's new task screen" desc="A simple JavaScript website that mimics a standard kanban board. Pulls from an API and has a custom built light/dark mode" git="https://github.com/dws2/kanban-GainorJoshua-FS" page="/kanban"
                />
                <ProjectHelperWide
                    title="Quiz Taker" src={QuizHome} alt="A quiz taking site's homepage" desc="A react based site with a custom RESTful API and database." git="https://github.com/GainorJoshua-FS/ASL" page="/quiz"
                />
            </div>
        </section>
    )
}

export default Projects

const styles ={
    section:{
        backgroundColor: "#2c3160",
        textAlign: "left",
        margin: "20px 0",
        padding: "20px"
    },
    h2:{
        color: "#e15c25",
        margin: "0 19%",
        borderBottom: "1px solid #e15c25"
    },
    div:{
        display: "flex",
        // alignItems: "end"
    }
}