import React from 'react'
import styles from './styles.module.scss'
import Button from '../Button'
import { useRouter } from 'next/router'
import Icon from '../Icon'

interface SearchBoxInterface {
  className?: string
  value?: string
  setValue?: any
  year?: string
  type?: string
}

const SearchBox: React.FC<SearchBoxInterface> = ({
  className = '',
  value,
  setValue,
  year = '',
  type = '',
}) => {
  const router = useRouter()

  return (
    <div className={styles.search + ' ' + className}>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter a movie name here"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <Button
        type="nobg"
        className={styles.button}
        disabled={!value.length}
        onClick={() =>
          router.push(
            `/search` +
              (value && (value !== '' ? `?value=${value}` : 'a')) +
              (year && (year !== '' ? `&year=${year}` : '')) +
              (type && (type !== '' ? `&type=${type}` : ''))
          )
        }
      >
        <Icon icon="search" />
      </Button>
    </div>
  )
}

export default SearchBox
