import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { InputForm } from './InputForm'
import { AnswerInputForm } from './AnswerInputForm'

export const Form = ({ questions, setQuestions, answers, setAnswers }) => {

  const handleAddInputForm = (e) => {
    e.preventDefault()
    setQuestions([...questions, ''])
    setAnswers([...answers], '')
  }

  return (
    <form style={styles.form}>
      {
        questions.map(( question, index ) =>
          <InputForm
            key={index}
            index={index}
            question={question}
            answer={answers[index]}
            questions={questions}
            setQuestions={setQuestions}
            answers={answers}
            setAnswers={setAnswers}
          />
        )
      }

      <button
        onClick={handleAddInputForm}
        style={styles.buttonPlus}
      >
        +
      </button>

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
