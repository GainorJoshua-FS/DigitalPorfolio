import React from 'react'

function Footer() {
    return (
        <footer style={styles.footer}>
            <h2 style={styles.h3}>Contact Me</h2>
            <section style={styles.section}>
                <h3>Feel free to contact me at <span style={styles.span}>joshgainor@gmail.com</span></h3>
                    {/* <h3>Socials</h3> */}
                    <ul style={styles.ul}>
                        <li style={styles.li}>
                            <a style={styles.a} href="https://www.linkedin.com/in/joshua-gainor/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                        </li>
                        <li style={styles.li}>
                            <a style={styles.a} href="https://github.com/GainorJoshua-FS" target="_blank" rel="noopener noreferrer">Github</a>
                        </li>
                        <li style={styles.li}>
                            <a style={styles.a} href="https://docs.google.com/document/d/19fH_-9WeQu6ExGR6X8zEwTXDvXXGMQPb-aJGzjH84Cg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a>
                        </li>
                        
                    </ul>
            </section>
        </footer>
    )
}

export default Footer

const styles ={
    footer:{
        backgroundColor: "#2c3160",
        color: "#e15c25",
        textAlign: "left",
        marginTop: "20px",
        padding: "20px",
    },
    h3:{
        margin: "0 19%",
        borderBottom: "1px solid #e15c25",
    },
    ul:{
        display: "flex",
        felxDirection: "column",
        listStyleType: "none",
        padding: "0"
    },
    a:{
        color: "#e15c25",
    },
    section:{
        margin: "0 20%",
    },
    li:{
        margin:"5px 10px 0 0"
    },
    span:{
        fontSize: "20px",
        fontWeight: "900"
    }
}