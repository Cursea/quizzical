import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
    text: string
    type?: boolean
    onClick?: () => void
    showAnswers?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type, showAnswers }) => (
    <button
        className={`${styles.button} ${showAnswers ? (type ? styles.correct : styles.incorrect) : ''}`}
        data-testid="Button"
    >
        {text}
    </button>
)

export default Button
