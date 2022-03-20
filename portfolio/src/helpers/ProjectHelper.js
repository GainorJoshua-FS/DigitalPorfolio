import React from 'react'

function ProjectHelper(props) {
    return (
        <article style={styles.article}>
            <h3 style={styles.h3} >{props.title}</h3>
            <div style={styles.div}>
                <img style={styles.img} src={props.src} alt={props.alt} />
                <img style={styles.img} src={props.src2} alt={props.alt2} />
            </div>
            <p style={styles.p} >{props.desc}</p>
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
        margin: " 10px 23px 0 23px"
        // textAlign: "center"
    },
    div:{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "end",
    }
}