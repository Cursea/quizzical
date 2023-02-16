import he from 'he'
import React, { useEffect, useState } from 'react'
import { QuestionType } from '../../types/appTypes'
import { shuffleArray } from '../../utils/shuffleArray'
import Question from '../Question/Question'
import styles from './Quiz.module.css'

interface QuizProps {
    showAnswers: boolean
}

const Quiz: React.FC<QuizProps> = ({ showAnswers }) => {
    const [data, setData] = useState<QuestionType[]>([])

    useEffect(() => {
        let ignore = false

        const fetchData = async () => {
            console.log('fetching data...')
            fetch('https://opentdb.com/api.php?amount=5&type=multiple')
                .then((res) => res.json())
                .then((data) => {
                    const decodedData = data.results.map((item: QuestionType) => {
                        return {
                            category: item.category,
                            type: item.type,
                            difficulty: item.difficulty,
                            question: he.decode(item.question),
                            correct_answer: he.decode(item.correct_answer),
                            incorrect_answers: item.incorrect_answers.map((ans) => he.decode(ans)),
                            answers: shuffleArray([
                                { answer: he.decode(item.correct_answer), correct: true },
                                ...item.incorrect_answers.map((ans) => ({ answer: he.decode(ans), correct: false })),
                            ]),
                        }
                    })
                    if (!ignore) setData(decodedData)
                })
        }

        fetchData()

        return () => {
            ignore = true
        }
    }, [])

    console.log('data:', data)

    return (
        <div className={styles.quiz} data-testid="Quiz">
            {data.map((question) => (
                <Question key={question.question} question={question} showAnswers={showAnswers} />
            ))}
        </div>
    )
}

export default Quiz
