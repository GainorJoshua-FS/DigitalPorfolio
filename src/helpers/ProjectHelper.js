import React from 'react'
import { Link } from 'react-router-dom'

function ProjectHelper(props) {
    return (
        <div style={styles.div}>
            <span>
                <img
                    style={styles.img}
                    src={props.src}
                    alt={props.alt}
                />
            </span>
            <article>
                <h3 style={styles.h3}>
                    {props.title}
                </h3>

                <p style={styles.p}>
                    {props.desc}
                </p>

                <a
                    style={styles.a} 
                    href={props.git} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Check out the Git repo!
                </a>
            </article>
        </div>

        // Old Styles =====================================

        // <article style={styles.article}>
        //     <h3 style={styles.h3} >{props.title}</h3>
        //     <div style={styles.div}>
        //         <img style={styles.img} src={props.src} alt={props.alt} />
        //         <img style={styles.img} src={props.src2} alt={props.alt2} />
        //     </div>
        //     <p style={styles.p} >{props.desc} <Link style={styles.link} to={props.page}>See More!</Link></p>
        //     <a style={styles.a} href={props.git} target="_blank" rel="noopener noreferrer">Check out the Git repo!</a>
        // </article>
    )
}

export default ProjectHelper

const styles ={
    div:{
        display: "flex",
        margin: "15px 0 15px 20%",
        width: "Calc(40% - 10px)"
    },
    h3:{
        color: "#e15c25",
        marginTop: "0",
        borderBottom: "1px dotted #e15c25"
    },
    p:{
        color: "#c2c0c1",
        fontSize: "16px",
        fontWeight: "600",
        letterSpacing: "1.5px"
    },
    a:{
        color: "#e15c25",
        // marginLeft: "7%",
    },
    // link:{
    //     color: "#e15c25", 
    // }
}