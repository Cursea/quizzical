import React from 'react'
import styles from './Question.module.css'

interface QuestionProps {
    props: any
}

const Question: React.FC<QuestionProps> = ({ props }) => (
    <div className={styles.question} data-testid="Question">
        <div>Question component</div>
    </div>
)

export default Question
