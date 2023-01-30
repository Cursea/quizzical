import { useEffect, useState } from 'react'
import he from 'he'
import styles from './App.module.css'
import Quiz from './components/Quiz/Quiz'
import { QuestionType } from './types/appTypes'

function App() {
    const [quizStarted, setQuizStarted] = useState(false)
    const [data, setData] = useState([])
    const [showAnswers, setShowAnswers] = useState(false)

    useEffect(() => {
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
                    }
                })
                setData(decodedData)
            })
    }, [])

    const startScreen = () => (
        <div className={styles.startScreen}>
            <h1 className={styles.title}>Quizzical</h1>
            <p>What&apos;s in the box? What&apos;s in the boooox?! 🥺</p>
            <button className={styles.startButton} onClick={() => setQuizStarted(true)}>
                Start Quiz
            </button>
        </div>
    )

    return (
        <div className={styles.app}>
            {!quizStarted && startScreen()}
            {quizStarted && (
                <>
                    <Quiz questions={data} showAnswers={showAnswers} />
                    <span className={styles.resultsContainer}>
                        <h5 className={styles.results}>You scored x/5 correct answers</h5>
                        <button onClick={() => setShowAnswers(!showAnswers)}>Check answers</button>
                        <button onClick={() => setQuizStarted(false)}>Start again</button>
                    </span>
                </>
            )}
        </div>
    )
}

export default App
