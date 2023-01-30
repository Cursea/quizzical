import React from 'react'
import { AnswersType, QuestionType } from '../../types/appTypes'
import { shuffleArray } from '../../utils/shuffleArray'
import Button from '../Button/Button'
import styles from './Question.module.css'

interface QuestionProps {
    question: QuestionType
    showAnswers: boolean
}

const Question: React.FC<QuestionProps> = ({ question, showAnswers }) => {
    const answers: AnswersType = []
    question.incorrect_answers.map((a: string) => answers.push({ answer: a, correct: false }))
    answers.push({ answer: question.correct_answer, correct: true })
    shuffleArray(answers)

    return (
        <div className={styles.questionContainer} data-testid="Question">
            <h4 className={styles.questionHeader}>{question.question}</h4>
            <ul className={styles.answers}>
                {answers.map((answer, i) => (
                    <Button key={i} text={answer.answer} type={answer.correct} showAnswers={showAnswers} />
                ))}
            </ul>
        </div>
    )
}

export default Question
