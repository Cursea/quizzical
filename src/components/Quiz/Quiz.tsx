import React, { ReactNode, useState } from 'react'
import Button from '../Button/Button'
import { shuffleArray } from '../../utils/shuffleArray'
import styles from './Quiz.module.css'

interface QuestionType {
    category: string
    difficulty: string
    type: 'multiple' | 'boolean'
    question: string
    correct_answer: string
    incorrect_answers: []
}
interface QuizProps {
    questions: QuestionType[]
}

export interface AnswerType {
    answer: string
    correct: boolean
}

const question = (question: QuestionType): ReactNode => {
    const answers: AnswerType[] = []
    question.incorrect_answers.map((a: string) => answers.push({ answer: a, correct: false }))
    answers.push({ answer: question.correct_answer, correct: true })
    shuffleArray(answers)

    return (
        <div>
            <p>{question.question}</p>
            {answers.map((answer, i) => (
                <Button key={i} text={answer.answer} type={answer.correct} />
            ))}
        </div>
    )
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
    return (
        <div className={styles.quiz} data-testid="Quiz">
            {questions.map((q) => (
                <React.Fragment key={q.question}>{question(q)}</React.Fragment>
            ))}
        </div>
    )
}

export default Quiz
