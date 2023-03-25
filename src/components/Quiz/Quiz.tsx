import React, { useEffect, useState } from 'react'
import { QuestionType } from '../../types/appTypes'
import Question from '../Question/Question'
import { fetchQuizData } from '../../utils/fetchQuizData'
import styles from './Quiz.module.css'

interface QuizProps {
    showAnswers: boolean
    handleAnswer: (isCorrect: boolean) => void
}

const Quiz: React.FC<QuizProps> = ({ showAnswers, handleAnswer }) => {
    const [data, setData] = useState<QuestionType[]>([])

    useEffect(() => {
        let ignore = false
        const fetchData = async () => {
            console.log('fetching data...')
            const quizData = await fetchQuizData(5)
            if (!ignore) setData(quizData)
        }
        fetchData()

        return () => {
            ignore = true
        }
    }, [])

    return (
        <div className={styles.quiz} data-testid="Quiz">
            {data.map((question) => (
                <Question
                    key={question.question}
                    question={question}
                    showAnswers={showAnswers}
                    handleAnswer={handleAnswer}
                />
            ))}
        </div>
    )
}

export default Quiz
