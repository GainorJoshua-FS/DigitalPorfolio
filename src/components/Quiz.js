import React from 'react'
import { Link } from 'react-router-dom'
import QuizHome from '../images/QuizHome.png'
import QuizTest from '../images/QuizTest.png'

const home = "<- Home"

function Quiz() {
    return (
        <section style={styles.section} >
                <Link style={styles.link} to="/"> {home} </Link>
            <section style={styles.div}>
                <img style={styles.col} src={QuizHome} alt="Quiz taker home page" />
                <img style={styles.col} src={QuizTest} alt="Quiz questions and multiple choice answers"/>
            </section>
            <section>
                <article style={styles.article}>
                    <h2>The Idea</h2>
                    <p style={styles.p}>
                        The idea behind this application is to have a simple site where the user can take quizzes that are either made by them, or made by someone else. This application can store as many quizzes as desired and each quiz can have as many questions and answers needed.
                    </p>
                </article>
                <article style={styles.article}>
                    <h2>The Plan</h2>
                    <p style={styles.p}>
                        The plan for this application started with the backend. I needed to make models of the quizzes, questions, and answers that all had certain associations. Then, I needed to store these models in a sequel database so that the future front end could pull each quiz and their questions/answers. I also needed to make some routes so that users could create, edit, or delete quizzes, questions, and answers. This was all done using NodeJs. This app also uses GitHub's Oauth to have a simple and quick login function.
                        <br/><br/>
                        After the back end was created, I needed a front end of the application. This was done in react and was only created with a 1 week time frame. The main part of this was to get the quizzes to show up and make sure that once clicked on, it would show the correct questions, followed by the correct possible answers. Once that was set up, thats when I began to style everything else. Starting with a header, then finding some images to spruce up this simple app, and finally giving everything a, actual style rather than just simple text.
                    </p>
                </article>
                <article style={styles.article}>
                    <h2>Behind the Scenes</h2>
                    <p style={styles.p}>
                        As stated above, the back end is all NodeJs, sequelize database, and github's Oauth. The quizzes, questions, and answers are all stored in a database to be pulled from. The three models are all associated with eachother in some way so that each quiz has the correct questions and each question has the correct possible answers. The front end is a react app that pulls from this database in order to display everything and allow the user to take the quiz.
                    </p>
                </article>
                <article style={styles.article}>
                    <h2>Whats Coming Next</h2>
                    <p style={styles.p}>
                        What's coming next for this application is an end result for this quiz. Currently, once submitted, the application takes you back to the login page. I'd like to take the user back to the home page and display thier current highest score on the tests they have take. After that, having an overal grade average displayed somewhere on the homescreen would be useful as well.
                    </p>
                </article>
                <a style={styles.link} href="https://github.com/GainorJoshua-FS/ASL" target="_blank" rel="noopener noreferrer">Check out the Github repo!</a>
            </section>
        </section>
    )
}

export default Quiz

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