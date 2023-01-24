import React from 'react'
import { QuestionType } from '../../types/appTypes'
import Question from '../Question/Question'
import styles from './Quiz.module.css'

interface QuizProps {
    questions: QuestionType[]
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
    return (
        <div className={styles.quiz} data-testid="Quiz">
            {questions.map((question) => (
                <Question key={question.question} question={question} />
            ))}
        </div>
    )
}

export default Quiz
