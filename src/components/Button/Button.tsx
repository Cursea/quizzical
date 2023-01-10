import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
    text: string
}

const Button: React.FC<ButtonProps> = ({ text }) => (
    <button className={styles.button} data-testid="Button">
        {text}
    </button>
)

export default Button
