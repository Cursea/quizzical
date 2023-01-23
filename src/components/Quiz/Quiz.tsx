import React from 'react'
import styles from './Quiz.module.css'

interface QuizProps {
    props: any
}

const Quiz: React.FC<QuizProps> = ({ props }) => {
    return (
        <div className={styles.quiz} data-testid="Quiz">
            <div>Quiz component</div>
        </div>
    )
}

export default Quiz
