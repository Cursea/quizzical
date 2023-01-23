import { useEffect, useState } from 'react'
import styles from './App.module.css'
import Quiz from './components/Quiz/Quiz'

function App() {
    const [quizStarted, setQuizStarted] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
            .then((res) => res.json())
            .then((data) => setData(data.results))
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
                    <Quiz questions={data} />
                    <button>Check answers</button> <button onClick={() => setQuizStarted(false)}>Start again</button>
                </>
            )}
        </div>
    )
}

export default App
