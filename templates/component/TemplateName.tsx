import React from 'react'
import styles from './TemplateName.module.css'

// to generate, run: npx generate-react-cli component Test

interface TemplateName {
    props: any
}

const TemplateName: React.FC<TemplateName> = ({ props }) => (
    <div className={styles.templateName} data-testid="TemplateName">
        <h1>TemplateName component</h1>
    </div>
)

export default TemplateName
