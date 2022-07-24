// Librerías
import React from 'react'

// Componentes
import { Form } from '../components/form/Form'

export const EncuestaAbierta = ({ questions, setQuestions, answers, setAnswers }) => {

  return (
    <div>
      <Form
        questions={questions}
        setQuestions={setQuestions}
        answers={answers}
        setAnswers={setAnswers}
      />
    </div>
  )
}
