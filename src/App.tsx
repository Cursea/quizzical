import { useState } from 'react'
import styles from './App.module.css'
import Quiz from './components/Quiz/Quiz'

function App() {
    const [quizStarted, setQuizStarted] = useState(false)
    const [showAnswers, setShowAnswers] = useState(false)
    const [score, setScore] = useState(0)

    const startScreen = () => (
        <div className={styles.startScreen}>
            <h1 className={styles.title}>Quizzical</h1>
            <p>What&apos;s in the box? What&apos;s in the boooox?! 🥺</p>
            <button className={styles.startButton} onClick={() => setQuizStarted(true)}>
                Start Quiz
            </button>
        </div>
    )

    const resetQuiz = () => {
        setQuizStarted(false)
        setShowAnswers(false)
        setScore(0)
    }

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore((score) => score + 1)
        }
    }

    return (
        <div className={styles.app}>
            {!quizStarted && startScreen()}
            {quizStarted && (
                <>
                    <Quiz showAnswers={showAnswers} handleAnswer={handleAnswer} />
                    <span className={styles.resultsContainer}>
                        {showAnswers && <h5 className={styles.results}>You scored {score}/5 correct answers</h5>}
                        <button onClick={() => setShowAnswers(!showAnswers)}>Check answers</button>
                        <button onClick={resetQuiz}>Start again</button>
                    </span>
                </>
            )}
        </div>
    )
}

export default App
