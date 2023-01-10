import { useState } from 'react'
import styles from './App.module.css'

function App() {
    const [quizStarted, setQuizStarted] = useState(false)

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
            {quizStarted && <button>Check answers</button>}
        </div>
    )
}

export default App
