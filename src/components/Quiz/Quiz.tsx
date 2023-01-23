import React, { useState } from 'react'
import styles from './Quiz.module.css'

interface QuizProps {
    questions: []
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
    return (
        <div className={styles.quiz} data-testid="Quiz">
            <div>
                {' '}
                {questions.map((q, id) => (
                    <p key={id}>{`${q.category} | ${q.question}`}</p>
                ))}
            </div>
        </div>
    )
}

export default Quiz
