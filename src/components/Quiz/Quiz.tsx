import React from 'react'
import { QuestionType } from '../../types/appTypes'
import Question from '../Question/Question'
import styles from './Quiz.module.css'

interface QuizProps {
    questions: QuestionType[]
    showAnswers: boolean
}

const Quiz: React.FC<QuizProps> = ({ questions, showAnswers }) => {
    return (
        <div className={styles.quiz} data-testid="Quiz">
            {questions.map((question) => (
                <Question key={question.question} question={question} showAnswers={showAnswers} />
            ))}
        </div>
    )
}

export default Quiz
