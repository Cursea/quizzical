import React, { useState } from 'react'
import { QuestionType } from '../../types/appTypes'
import Button from '../Button/Button'
import styles from './Question.module.css'

interface QuestionProps {
    question: QuestionType
    showAnswers: boolean
    handleAnswer: (isCorrect: boolean) => void
}

const Question: React.FC<QuestionProps> = ({ question, showAnswers, handleAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const { question: text, answers } = question

    return (
        <div className={styles.questionContainer} data-testid="Question">
            <h4 className={styles.questionHeader}>{text}</h4>
            <ul className={styles.answers}>
                {answers?.map((item, i) => (
                    <Button
                        key={i}
                        text={item.answer}
                        isCorrect={item.correct}
                        showAnswers={showAnswers}
                        onClick={() => {
                            setSelectedAnswer(item.answer)
                            handleAnswer(item.correct)
                        }}
                        isSelected={selectedAnswer === item.answer}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Question
