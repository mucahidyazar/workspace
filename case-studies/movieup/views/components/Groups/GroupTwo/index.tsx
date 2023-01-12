import React from 'react'
import styles from './styles.module.scss'

interface TitleProps {
  title?: string
}

const BoilerPlate: React.FC<TitleProps> = ({ title }) => {
  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default BoilerPlate
