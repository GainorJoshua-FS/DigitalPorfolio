import React from 'react'
import Logo2 from '../images/Logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={styles.header}>
            <Link id="link" to="/" style={styles.link}>
                <img src={Logo2} alt="JG Logo" />
            </Link>
            <h1 style={styles.h1}>Joshua Gainor <br/> <span style={styles.span}> Web Developer </span></h1>
        </header>
    )
}

export default Header

const styles ={
    header:{
        backgroundColor: "#2c3160",
        padding: "20px 0",
        display: "flex",
        alignItems: "center",
        
    },
    h1:{
        color: "#e15c25",
    
    },
    link:{
        margin: "0 20px",

    },
    span:{
        color: "#c2c0c1"
    }
}