import React, { ReactNode, useState } from 'react'
import Button from '../Button/Button'
import { shuffleArray } from '../../utils/shuffleArray'
import { AnswerType, QuestionType } from '../../types/appTypes'
import styles from './Quiz.module.css'

interface QuizProps {
    questions: QuestionType[]
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
