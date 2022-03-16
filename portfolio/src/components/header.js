import React from 'react'
import Logo2 from '../images/Logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={styles.header}>
            <Link to="/">
                <img src={Logo2} alt="JG Logo" />
            </Link>
            <h1>Header</h1>
        </header>
    )
}

export default Header

const styles ={
    header:{
        backgroundColor: "#2c3160",
        padding: "20px 0",
        display: "flex"
    }
}