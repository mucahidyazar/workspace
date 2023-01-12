import React from 'react'
import styles from './styles.module.scss'

interface SelectBoxInterface {
  label: string
  className: string
  data: string[]
  state: string
  setState: any
}

const SelectBox: React.FC<SelectBoxInterface> = ({
  label,
  className,
  data,
  state,
  setState,
}) => {
  return (
    <div className={styles.selectBox + ' ' + className}>
      <input type="checkbox" id={label} />
      <label className={styles.select} htmlFor={label}>
        <p className={styles.selectBoxText}>{state !== '' ? state : label}</p>
        <div
          className={styles.selectBoxIcon + ' ' + styles.selectBoxIconActive}
        ></div>
      </label>
      <div className={styles.menu}>
        {data.map((item) => (
          <label
            key={item}
            className={styles.menuItem}
            onClick={() => {
              setState(item)
            }}
            htmlFor={label}
          >
            {item}
          </label>
        ))}
      </div>
    </div>
  )
}

export default SelectBox
