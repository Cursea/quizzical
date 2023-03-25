import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
    text: string
    isCorrect: boolean
    isSelected?: boolean
    showAnswers: boolean
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ text, isCorrect, showAnswers, isSelected, onClick }) => {
    return (
        <button
            className={`${styles.button} ${isSelected && styles.selected} ${
                showAnswers ? (isCorrect ? styles.correct : styles.incorrect) : ''
            }`}
            data-testid="Button"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
