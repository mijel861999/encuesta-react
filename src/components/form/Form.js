import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { InputForm } from './InputForm'

export const Form = ({ questions, setQuestions }) => {
  // const [questions, setQuestions] = useState([])

  const handleInputCreate = (e) => {
    e.preventDefault()
    console.log('Crear encuesta')
    console.log(questions)
  }

  const handleAddInputForm = (e) => {
    e.preventDefault()
    setQuestions([...questions, ''])
  }

  return (
    <form style={styles.form}>
      {
        questions.map(( question, index ) =>
            <InputForm
              key={index}
              index={index}
              question={question}
              questions={questions}
              setQuestions={setQuestions}
            />
        )
      }

      <button
        onClick={handleAddInputForm}
        style={styles.buttonPlus}
      >
        +
      </button>

      {/* <button
        onClick={handleInputCreate}
        style={styles.button}
      >
        Crear encuesta
      </button> */}

      <Link
        style={styles.link}
        to='/encuesta-creada'
      >
        Ver tu encuesta
      </Link>
    </form>
  )
}

const styles = {
  form: {
    width: '70%',
    minWidth: '263px',
    maxWidth: '700px',
    margin: '30px auto'
  },
  button: {
    display: 'block',
    width: '150px',
    height: '40px',
    margin: '10px auto',
    color: 'white',
    backgroundColor: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  buttonPlus: {
    display: 'block',
    width: '40px',
    height: '40px',
    margin: '0px auto',
    fontSize: '2rem',
    color: 'white',
    background: 'black',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer'
  },
  link: {
    display: 'block',
    width: '150px',
    height: '40px',
    margin: '15px auto', 
    color: 'white',
    fontSize: '2rem',
    textDecoration: 'none',
    textAlign: 'center',
    background: 'black',
    borderRadius: '5px'
  }
}
