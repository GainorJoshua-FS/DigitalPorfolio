import React from 'react'

function ProjectHelperWide(props) {
    return (
        <article style={styles.article}>
            <h3 style={styles.h3} >{props.title}</h3>
            <div style={styles.div}>
                <img style={styles.img} src={props.src} alt={props.alt} />
            </div>
            <p style={styles.p} >{props.desc}</p>
        </article>
    )
}

export default ProjectHelperWide

const styles ={
    article:{
        width: "33%"
    },
    img:{
        width: "68%"
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
        // display: "flex",
        // alignItems: "stretch"
    },
    div:{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "end",
    }
}