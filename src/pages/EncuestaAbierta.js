// Librerías
import React from 'react'

// Componentes
import { Form } from '../components/form/Form'

export const EncuestaAbierta = ({ questions, setQuestions }) => {

  return (
    <div>
      <Form questions={questions} setQuestions={setQuestions} />
    </div>
  )
}
