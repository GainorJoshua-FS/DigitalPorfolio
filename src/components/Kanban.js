import React from 'react'
import { Link } from 'react-router-dom'
import KanHome from '../images/KanbanHome.png'
import KanNew from '../images/KanbanNew.png'

const home = "<- Home"

function Kanban() {
    return (
        <section style={styles.section} >
                <Link style={styles.link} to="/"> {home} </Link>
                {/* <h2>Coming Soon!</h2>
                <p>
                    This page is still under development
                </p> */}
            <section style={styles.div}>
                <img style={styles.col} src={KanHome} alt="A Kanban Board Website's home page" />
                <img style={styles.col} src={KanNew} alt="A modal window for adding a new task to a kanban board"/>
            </section>
            <section>
                <article style={styles.article}>
                    <h2>The Idea</h2>
                    <p style={styles.p}>
                        The idea for this project was rather simple, create a kanban board using an API in order to get used to pulling information from an API. Another idea for this website was to create my own button that will allow the user to switch from light and dark mode. For this project, it was my first time ever pulling from an API and my first time programming something to change the theme of the website.
                    </p>
                </article>
                <article style={styles.article}>
                    <h2>The Plan</h2>
                    <p style={styles.p}>
                        The reason behind this project was to have a simple way to keep track of the tasks I needed to complete and the tasks I had coming up. The other reason behind this project was simply that it was a school project for one of my courses during my time at Full Sail University. One of the most important part of this assignment was to have semantic HTML and to use as little divs as possible. So, to start, I researched which container tags to use in which situations. Once I felt comfortable, I made sure to keep it as semantic as possible so all of the information goes to where it needs. Next was the theme button. After a little bit of researched, I decided to brute-force it until it worked and then started from there to clean it up and make it run more efficiently.
                    </p>
                </article>
                <article style={styles.article}>
                    <h2>Behind the Scenes</h2>
                    <p style={styles.p}>
                        My kanban board uses an API from Glitch called Kanban API Server. This api stores three lists of tasks that get pulled into the code when you call to fetch them. After that, I made sure they were laid out within proper HTML tags and styled them using SCSS. I used both plugins and mix-ins to make the site reactive and to change colors of certain aspects. This site also allows you to input new tasks into whichever list you choose, pushing that information into the API.
                    </p>
                </article>
                <article style={styles.article}>
                    <h2>Whats Coming Next</h2>
                    <p style={styles.p}>
                        project is a simple delete function to delete tasks in any list the user would need to delete them from. I also wish to implement an edit option so the user can fix any spelling mistakes or change any due dates.
                    </p>
                </article>
            </section>
        </section>
    )
}

export default Kanban

const styles ={
    section:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: "10px 20% 0 20%",
        // flexWrap: "wrap",
        
    },
    col:{
        // height: "40%",
        marginTop: "10px"
    },
    article:{
        display: "flex",
        flexDirection: "column",
        marginLeft: "20%",
        textAlign: "left",
        color: "#2c3160"
    },
    div:{
        display: "flex",
        flexDirection: "column",
        maxWidth: "33%",
    },
    link:{
        color: "#e15c25",
        width: "100%",
        fontWeight: "bolder"
    },
    p:{
        fontSize: "17px"
    }
}