import React from 'react'
import Me from '../images/Me.jpg'

function ShowMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "More about me...";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Less about me...";
        moreText.style.display = "inline";
    }
}

function AboutMe() {
    return (
        <section style={styles.section}>
            <img style={styles.img} src={Me} alt="picture of Joshua Gainor" />
            <h2 style={styles.h2} >About Me</h2>
            {/* TODO Add more to the second paragraph */}
            <p style={styles.p}>
                Hey there! My name is Joshua Gainor and I am a web designer and developer that mainly focuses on front-end development. I am originally from Bowie, Maryland before moving to Florida to go to school at Full Sail University. I orginally went to Full Sail for Simulations & Visualization in order to create virtual reality games, but quickly learned that I would prefer to keep games as a hobby and not a job. So, I switched into web development and started to enjoy planning out what a website would look like and learning how to make it function<span id="dots">...</span>
                <span id="more"> <br/>
                    Lorem Epsum asdbasfbajkbf
                </span>
            </p>

            {/* ToDo: style this */}
            <button id="myBtn" onClick={ShowMore}>More about me...</button>
        </section>
    )
}

export default AboutMe

const styles ={
    section:{
        color: "#2c3160",
        textAlign: "left",
        margin: "20px 20%"
    },
    h2:{
        borderBottom: "1px solid #2c3160"
    },
    p:{
        fontSize: "16px",
        fontWeight: "600"
    },
    img:{
        textAlign: "center",
        borderRadius: "30%"
    }
}