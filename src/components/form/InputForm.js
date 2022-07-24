import React, { useState } from 'react'

export const InputForm = ({ index, question, answer,questions, setQuestions, answers, setAnswers }) => {

  const [questionInput, setQuestionInput] = useState('')
  const [answerInput, setAnswerInput] = useState('')
  const [saved, setSaved] = useState(false)
  const [savedAnswer, setSavedAnswer] = useState(false)

  const handleInputChange = (e) => {
    setQuestionInput(e.target.value)
  }

  const handleInputAnswerChange = (e) => {
    setAnswerInput(e.target.value)
  }

  const handleInputSave = (e) => {
    e.preventDefault()
    const array = [...questions]
    array[index] = questionInput

    setQuestions(array)
    setSaved(true)
  }

  const handleInputAnswerSave = (e) => {
    e.preventDefault()
    const array = [...answers]
    array[index] = answerInput

    setAnswers(array)
    setSavedAnswer(true) 
  }

  return (
    <div style={styles.inputContainer}>
      <label
        style={styles.label}
      >
        Escribe tu pregunta N° {index + 1}
      </label>

      {/* Pregunta */}
      <input
        type='text'
        name='question'
        onChange={handleInputChange}
        value={questionInput}
        style={styles.input}
        placeholder={question !=='' ? question : 'Escriba su pregunta...'}
      />
      <button
        style={styles.button}
        style={saved ? styles.buttonSaved : styles.button}
        onClick={handleInputSave}
      >
        Save
      </button>

      
      {/* Respuesta */}
      <input
        type='text'
        name='answer'
        onChange={handleInputAnswerChange}
        value={answerInput}
        style={styles.input}
        placeholder={answer !=='' ? answer : 'Escriba su respuesta...'}
      />
      <button
        style={styles.button}
        style={savedAnswer ? styles.buttonSaved : styles.button}
        onClick={handleInputAnswerSave}
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
