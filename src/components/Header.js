import React from 'react';


export const Header = () => {
    return(
        <header style={styles.header}>
            <nav style={styles.nav}>
                <a href="/" style={styles.link}>Crear</a>
            </nav>
            <h1 style={styles.title}>Encuesta</h1>
        </header>
    )
}

const styles = {
    header: {
        width: "100%",
        minWidth: "320px",
        height: "160px",
    },
    nav: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        height: "70px",
    },
    link: { 
        margin: "0px 20px",
        fontSize: "2.4rem",
        color: "black",
        textDecoration: "none"
    },
    title: {
        fontSize: "5rem",
        textAlign: "center"
    }
}