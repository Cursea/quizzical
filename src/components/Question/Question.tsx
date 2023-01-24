import React from 'react'
import { AnswerType, QuestionType } from '../../types/appTypes'
import { shuffleArray } from '../../utils/shuffleArray'
import Button from '../Button/Button'
import styles from './Question.module.css'

interface QuestionProps {
    question: QuestionType
}

const Question: React.FC<QuestionProps> = ({ question }) => {
    const answers: AnswerType[] = []
    question.incorrect_answers.map((a: string) => answers.push({ answer: a, correct: false }))
    answers.push({ answer: question.correct_answer, correct: true })
    shuffleArray(answers)

    return (
        <div className={styles.questionContainer} data-testid="Question">
            <h4 className={styles.questionHeader}>{question.question}</h4>
            <ul className={styles.answers}>
                {answers.map((answer, i) => (
                    <Button key={i} text={answer.answer} type={answer.correct} />
                ))}
            </ul>
        </div>
    )
}

export default Question
