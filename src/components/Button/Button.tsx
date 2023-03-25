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
    let buttonClasses = `${styles.button}`
    if (isSelected) {
        buttonClasses += ` ${styles.selected}`
        if (showAnswers) {
            buttonClasses += isCorrect ? ` ${styles.correct}` : ` ${styles.incorrect}`
        }
    } else if (showAnswers && isCorrect) {
        buttonClasses += ` ${styles.correct}`
    }

    return (
        <button className={buttonClasses} data-testid="Button" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
