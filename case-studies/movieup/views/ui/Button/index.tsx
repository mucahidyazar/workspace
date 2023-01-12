import React from 'react'
import Icon from '../Icon'
import styles from './styles.module.scss'

interface ButtonProps {
  name?: string
  type?: string
  className?: string
  firstIcon?: string
  lastIcon?: string
  onClick?: any
  active?: boolean
  disabled?: boolean
  children?: React.ReactNode
}

const Button = ({
  name,
  children,
  type,
  className,
  firstIcon,
  lastIcon,
  onClick,
  active,
  disabled,
}: ButtonProps) => {
  const calcType = () => {
    if (type === 'circle') {
      return styles.circle
    } else if (type === 'small') {
      return styles.small
    } else if (type === 'nobg') {
      return styles.nobg
    } else if (type === 'pageText') {
      return styles.pageText
    } else if (type === 'pageNum') {
      return styles.pageNum
    } else {
      return ''
    }
  }

  return (
    <button
      className={
        styles.button +
        ' ' +
        calcType() +
        ' ' +
        className +
        ' ' +
        (active ? styles.active : '') +
        ' ' +
        (disabled ? styles.disabled : '')
      }
      onClick={onClick ? onClick : () => {}}
      disabled={disabled}
    >
      {firstIcon && <Icon icon={firstIcon} />}
      {name || children}
      {lastIcon && <Icon icon={lastIcon} />}
    </button>
  )
}

export default Button
