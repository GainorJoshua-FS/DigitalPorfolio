import React from 'react'
import { Link } from 'react-router-dom'

function ProjectHelper(props) {
    return (
        <article style={styles.article}>
            <h3 style={styles.h3} >{props.title}</h3>
            <div style={styles.div}>
                <img style={styles.img} src={props.src} alt={props.alt} />
                <img style={styles.img} src={props.src2} alt={props.alt2} />
            </div>
            <p style={styles.p} >{props.desc} <Link style={styles.link} to={props.page}>See More!</Link></p>
            <a style={styles.a} href={props.git} target="_blank" rel="noopener noreferrer">Check out the Git repo!</a>
        </article>
    )
}

export default ProjectHelper

const styles ={
    article:{
        width: "33%"
    },
    img:{
        width: "40%"
    },
    h3:{
        color: "#e15c25",
        // margin: "0 auto",
        textAlign: "center",
        // borderBottom: "1px dotted #e15c25"
    },
    p:{
        color: "#c2c0c1",
        fontSize: "16px",
        fontWeight: "600",
        margin: " 10px 7% 5px 7%",
        letterSpacing: "1.5px"
        // textAlign: "center"
    },
    div:{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "end",
    },
    a:{
        color: "#e15c25",
        marginLeft: "7%",
    },
    link:{
        color: "#e15c25", 
    }
}