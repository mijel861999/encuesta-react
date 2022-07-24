import React from 'react'


export const AnswerInputForm = () => {
    return (
        <div style={styles.inputContainer}>
            <input
                type='text'
                name='question'
                style={styles.input}
                placeholder='Escriba su respuesta...'
            />
            <button
                style={styles.button}
                style={styles.button}
            >
                Save
            </button>
        </div>
    )
}


const styles = {
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: '28px 0px'
  },
  label: {
    fontSize: '2.4rem',
    margin: '7px 5px'
  },
  input: {
    height: '40px',
    width: '100%',
    padding: '10px 10px'
  },
  button: {
    width: '100%',
    height: '30px',
    color: 'white',
    background: 'black',
    border: 'none',
    cursor: 'pointer'
  },
  buttonSaved: {
    width: '100%',
    height: '30px',
    color: 'white',
    background: 'green',
    border: 'none',
    cursor: 'pointer'
  }
}
