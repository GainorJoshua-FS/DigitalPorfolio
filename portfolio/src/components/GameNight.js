import React from 'react'
// import color from '../images/color.png'
// import screens from '../images/screens.png'
import collection from '../images/collection.png'
import homescreen from '../images/GndHome.png'
import { Link } from 'react-router-dom'

const home = "<- Home"

function GameNight() {
    return (
        <section style={styles.section}>
                <Link style={styles.link} to="/"> {home} </Link>
            <section style={styles.div}>
                <img style={styles.col} src={collection} alt="A bookshelf full of board games" />
                {/* <img style={styles.col} src={color} alt="A color pallet"/> */}
                {/* <img style={styles.col} src={screens} alt="Wireframes of Game Night Debut"/> */}
                <img style={styles.col} src={homescreen} alt="A color pallet"/>
            </section>
            <section>
                <article style={styles.article}>
                    <h2>The Idea</h2>
                    <p style={styles.p}>I had always been a fan of games ever since I could remember. However, as I got older, I learned that board games were better at bringing people together to enjoy each other's company. Starting around my late high school years, I started collecting board games and hosting game nights at my house with my friends. One issue I started to come across was picking out a game to play and trying to list off possible games to choose from. As my collection grew, it became harder and harder to list out every option for the group. That’s where my idea for Game Night Debut came from. Now, users can keep their collection online to share to others to make it easier to view and choose a game.</p>
                </article>
                <article style={styles.article}>
                    <h2>The Plan</h2>
                    <p style={styles.p}>I wanted to make an app that had one simple purpose of keeping your board game collection all in one place. To do this, I started to come up with a color pallet to use for the web app. Since the topic was on board games, I wanted the color scheme to be somewhat old/classic and a little bit of retro. As for fonts, I wanted to go with something easy to read, but also something a little fancy for the title of the site. Once the colors and fonts had been picked, it was time to move onto the wireframes.
                        <br/><br/>
                        The wireframes started with just grayed out blocks that would show the placements of different images and text. Once I planned out the layouts of the first few screens, I began adding color, text, and images. Of course, it didn't stop there as I had to make tweaks and edits to the layouts as I populated the wireframes. Once I had a full wireframe of the app that I was proud of, I started with the code.
                    </p>
                </article>
                <article style={styles.article}>
                    <h2>Behind the Scenes</h2>
                    <p style={styles.p}>Game Night Debut is a ReactJs and NodeJs based web application that’s programmed primarily for mobile use. As far as the games go, the images and the information on the games comes from an API called Board Game Atlas. The home page is sorted by the top-rated games at the time and the search page allows you to search for any board game and board game expansions. The backend consists of a Postgres database that keeps track of the plans on your account.</p>
                </article>
                <article style={styles.article}>
                    <h2>Whats Coming Next</h2>
                    <p style={styles.p}>As of right now, Game Night Debut has the option of keeping a collection of your games and creating a plan that has a date, time, and address to keep track of when your upcoming game nights are. In the future, I plan on creating a login system and an invite system that will let you send your plans to others so that they can keep track of when and where to meet up. I also plan on putting the collection into the database that's associated to the user's account.</p>
                </article>
            </section>
        </section>
    )
}

export default GameNight

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
        width: "100%"
    },
    p:{
        fontSize: "17px"
    }
}