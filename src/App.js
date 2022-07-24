// Librerías
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Estílos
import './App.css'

// componente -> Elementos
import { Header } from './components/Header'

// Pages
import { MainPage } from './pages/MainPage'
import { EncuestaOpciones } from './pages/EncuestaOpciones'
import { EncuestaAbierta } from './pages/EncuestaAbierta'
import { EncuestaCreada } from './pages/EncuestaCreada'

function App () {

  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])

  return (
    // <AppRouter />
    <div style={styles.app} className='App'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<MainPage />}
        />
        <Route 
          path='/encuesta-opciones'
          element={<EncuestaOpciones />}
        />
        <Route
          path='/encuesta-abierta'
          element={
            <EncuestaAbierta 
              questions={questions}
              setQuestions={setQuestions}
              answers={answers}
              setAnswers={setAnswers}
            />
          }
        />
        <Route
          path='/encuesta-creada'
          element={
            <EncuestaCreada
              questions={questions}
              setQuestions={setQuestions}
              answers={answers}
              setAnswers={setAnswers}
            />
          } 
        />
      </Routes>
    </div>
  )
}

const styles = {
  app: {
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow',
    padding: '20px'
  }
}

export default App
