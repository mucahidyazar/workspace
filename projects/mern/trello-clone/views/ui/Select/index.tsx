import React from 'react'
import styles from './styles.module.scss'

interface select {
  id: string
  name: string
  placeholder?: string
  options: string[]
  className?: string
}

function Select({
  id,
  name,
  options,
  className,
  placeholder = 'Choose one',
}: select) {
  return (
    <select
      name={name}
      id={id}
      className={styles.select + ' ' + (className ? className : '')}
      placeholder={placeholder}
    >
      {options.map((option, index) => (
        <option className={styles.option} value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Select
