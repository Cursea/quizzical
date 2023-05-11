import React from 'react'
import styles from './TemplateName.module.scss'

// to generate, run: npx generate-react-cli component Test

interface TemplateNameProps {
    props: any
}

const TemplateName: React.FC<TemplateNameProps> = ({ props }) => (
    <div className={styles.templateName} data-testid="TemplateName">
        <div>TemplateName component</div>
    </div>
)

export default TemplateName
