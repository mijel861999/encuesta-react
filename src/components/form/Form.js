import React, { useState } from 'react'

import { InputForm } from './InputForm'

export const Form = () => {
  const [questions, setQuestions] = useState([])

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
      <button style={styles.button}>
        Enviar
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
    width: '100px',
    height: '40px',
    margin: '10px auto',
    color: 'white',
    backgroundColor: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
}
