import React from 'react'
import styles from './styles.module.scss'

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string
}

export default function Icon({
  name,
  onClick,
  className,
  ...props
}: IconProps) {
  return (
    <img
      onClick={onClick}
      className={styles.icon + ' ' + className}
      {...props}
      src={`/static/assets/svg/${name}.svg`}
      alt={name}
    />
  )
}
