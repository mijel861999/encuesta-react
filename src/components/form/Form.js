import React, { useState } from 'react'

import { InputForm } from './InputForm'

export const Form = () => {
  const [questions, setQuestions] = useState([])

  const handleInputCreate = (e) => {
    e.preventDefault()
    console.log('Crear encuesta')
    console.log(questions)
  }

  return (
    <form style={styles.form}>
      <InputForm
        setQuestions={setQuestions}
        questions={questions}
      />
      <InputForm
        setQuestions={setQuestions}
        questions={questions}
      />
      <InputForm
        setQuestions={setQuestions}
        questions={questions}
      />
      <InputForm
        setQuestions={setQuestions}
        questions={questions}
      />
      <p>{questions}</p>
      <button
        onClick={handleInputCreate}
        style={styles.button}
      >
        Crear encuesta
      </button>
    </form>
  )
}

const styles = {
  form: {
    width: '70%',
    minWidth: '300px',
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
  }
}
