import React from 'react'


const Question = ({ question, index }) => {
    return (
        <div style={styles.questionContainer}>
            <label style={styles.questionLabel}>
                {index + 1}: {question}
            </label>
            <input style={styles.questionInput} type="text" placeholder='Respuesta...' />
        </div>
    )
}


export const EncuestaCreada = ({ questions }) => {
    return (
        <div>
            {
                questions.map( (question, index) => (
                    <Question key={index} question={question} index={index} />
                ))
            }
        </div>
    )
}

const styles = {
    questionContainer : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        minWidth: '180px',
        maxWidth: '700px',
        margin: '25px auto'
    },
    questionInput: {
        width: '100%',
        height: '30px',
        padding: '5px',
        fonSize: '1.5rem'
    },
    questionLabel: {
        alignSelf: 'start',
        fontSize: '1.8rem',
        margin: '7px 0px'
    }
}