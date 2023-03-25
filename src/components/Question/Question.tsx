import React from 'react'
import { QuestionType } from '../../types/appTypes'
import Button from '../Button/Button'
import styles from './Question.module.css'

interface QuestionProps {
    question: QuestionType
    showAnswers: boolean
}

const Question: React.FC<QuestionProps> = ({ question, showAnswers }) => {
    return (
        <div className={styles.questionContainer} data-testid="Question">
            <h4 className={styles.questionHeader}>{question.question}</h4>
            <ul className={styles.answers}>
                {question.answers?.map((answer, i) => (
                    <Button key={i} text={answer.answer} isCorrect={answer.correct} showAnswers={showAnswers} />
                ))}
            </ul>
        </div>
    )
}

export default Question
