import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to='/' style={styles.link}>Crear</Link>
      </nav>
      <h1 style={styles.title}>Encuesta</h1>
    </header>
  )
}

const styles = {
  header: {
    width: '100%',
    height: '145px',
    margin: '60px 0px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    height: '70px'
  },
  link: {
    margin: '0px 20px',
    fontSize: '2.4rem',
    color: 'black',
    textDecoration: 'none'
  },
  title: {
    fontSize: '5rem',
    textAlign: 'center'
  }
}
