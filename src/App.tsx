import styles from './App.module.css'
import Button from './components/Button/Button'

function App() {
    return (
        <div className={styles.app}>
            <h1>Quizzical</h1>
            <p>What&apos;s in the boooox?</p>
            <Button text="Start Quiz" />
        </div>
    )
}

export default App
