import React, { useState } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
    text: string
    isCorrect?: boolean
    onClick?: () => void
    showAnswers?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, isCorrect, showAnswers }) => {
    const [selected, setSelected] = useState(false)
    const onClick = () => {
        setSelected(!selected)
    }

    return (
        <button
            onClick={onClick}
            className={`${styles.button} ${selected && styles.selected} ${
                showAnswers ? (isCorrect ? styles.correct : styles.incorrect) : ''
            }`}
            data-testid="Button"
        >
            {text}
        </button>
    )
}

export default Button
