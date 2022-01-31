import React, { useState } from 'react'

export const InputForm = ({ questions, setQuestions }) => {
  const [question, setQuestion] = useState('')

  const handleInputChange = (e) => {
    setQuestion(e.target.value)
  }

  const handleInputSave = (e) => {
    e.preventDefault()
    setQuestions([...questions, question])
    console.log(questions)
  }

  return (
    <div style={styles.inputContainer}>
      <label
        style={styles.label}
      >
        1. Pregunta N°1
      </label>

      <input
        type='text'
        name='question'
        onChange={handleInputChange}
        value={question}
        style={styles.input}
        placeholder='Escriba su pregunta...'
      />
      <button
        onClick={handleInputSave}
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
