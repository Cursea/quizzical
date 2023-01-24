import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
    text: string
    type?: boolean
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type }) => (
    <button className={`${styles.button} ${type ? styles.correct : styles.incorrect}`} data-testid="Button">
        {text}
    </button>
)

export default Button
