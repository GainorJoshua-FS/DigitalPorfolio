import React from 'react'
import { Link } from 'react-router-dom'

function ProjectHelper(props) {
    const renderLink = props.useLink ? (
        <Link
            style={styles.a}
            to={props.seeMore}
            rel="noopener noreferrer"
        >
            See More
        </Link>
    ) : (
        <a
            style={styles.a}
            href={props.seeMore}
            target="_blank"
            rel="noopener noreferrer"
        >
            See More
        </a>
    );
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
                    {renderLink}
                    {/* <Link style={styles.a} 
                    to={props.seeMore} 
                    target="_blank" 
                    rel="noopener noreferrer">
                        See More
                    </Link> */}
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
        margin: "15px 0 25px 20%",
        width: "60%"
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
    img:{
        maxWidth: "100px",
        maxHeight: "100px",
        paddingRight: "10px"
    }
    // link:{
    //     color: "#e15c25", 
    // }
}