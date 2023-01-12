import React from 'react'
import styles from './styles.module.scss'

interface IconInterface {
  style?: any
  icon?: string
  className?: string
}

const Icon: React.FC<IconInterface> = ({ style, icon, className }) => {
  return (
    <i style={style} className={`${styles.icon} icon-${icon} ${className}`} />
  )
}

export default Icon
