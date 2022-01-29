import React from 'react'

export const InputForm = () => {
  return (
    <div style={styles.inputContainer}>
      <label style={styles.label}>1. Pregunta N°1</label>
      <input style={styles.input} placeholder='Escriba su pregunta...' />
    </div>
  )
}

const styles = {
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    margin: '20px auto'
  },
  label: {
    fontSize: '2.4rem',
    margin: '7px 5px'
  },
  input: {
    height: '40px',
    padding: '10px 10px'
  }
}
