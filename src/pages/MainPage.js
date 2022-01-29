// Librerías
import React from 'react'
import { Link } from 'react-router-dom'

const Option = ({ title, description, to }) => {
  return (
    <div style={styles.option}>
      <h1 style={styles.optionTilte}>{title}</h1>
      <p style={styles.optionDescription}>{description}</p>
      <Link
        style={styles.optionLink}
        to={to}
      >
        Crear
      </Link>
    </div>
  )
}

export const MainPage = () => {
  return (
    <div style={styles.optionContainer}>
      <Option
        title='1. Encuesta abierta'
        description='Descripción de esta encuesta, debe ser muy interesante para que te sigas quedando a leer esto'
        to='/encuesta-abierta'
      />
      <Option
        title='2. Encuesta de opciones'
        description='Descripción de esta encuesta, debe ser muy interesante para que te sigas quedando a leer esto'
        to='/encuesta-opciones'
      />
    </div>
  )
}

const styles = {
  optionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  option: {
    height: '140px',
    width: '70%',
    minWidth: '320px',
    maxWidth: '500px',
    padding: '10px',
    margin: '30px 0px',
    border: '1px solid black'
  },
  optionTilte: {
    fontSize: '2rem'
  },
  optionDescription: {
    padding: '5px 0px',
    fontSize: '1.4rem'
  },
  optionLink: {
    fontSize: '1.6rem',
    color: 'black'
  }
}
