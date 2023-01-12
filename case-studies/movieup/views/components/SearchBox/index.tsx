import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import SelectBox from '../../ui/SelectBox'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import { types, years } from '../../../config/dummy/data'
import { useRouter } from 'next/router'

interface SearchBoxInterface {
  className?: string
}

const SearchBox: React.FC<SearchBoxInterface> = ({ className }) => {
  const router = useRouter()

  const [value, setValue] = useState('')
  const [year, setYear] = useState('')
  const [type, setType] = useState('')

  const [canSearch, setCanSearch] = useState(false)

  useEffect(() => {
    if (type !== '' && year !== '' && value !== '') {
      setCanSearch(true)
    } else {
      setCanSearch(false)
    }
  }, [value, year, type, canSearch])

  return (
    <div className={'container' + ' ' + className}>
      <div className={styles.searchBox}>
        <SelectBox
          state={year}
          setState={setYear}
          label="Year"
          className={styles.searchBoxYear}
          data={years}
        />
        <SelectBox
          state={type}
          setState={setType}
          label="Type"
          className={styles.searchBoxType}
          data={types}
        />
        <Input
          className={styles.searchBoxInput}
          value={value}
          setValue={setValue}
          year={year}
          type={type}
        />
        <Button
          name="Search"
          lastIcon="arrow-right"
          className={styles.searchBoxButton}
          onClick={() => {
            router.push(
              `/search` +
                (value !== '' ? `?value=${value}` : 'a') +
                (year !== '' ? `&year=${year}` : '') +
                (type !== '' ? `&type=${type}` : '')
            )
          }}
          disabled={!canSearch}
        />
      </div>
    </div>
  )
}

export default SearchBox
