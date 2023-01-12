import { useRouter } from 'next/router'
import React from 'react'
import Button from '../Button'
import styles from './styles.module.scss'

interface PaginationInterface {
  pagesCount?: number
  page?: string
}

const Pagination: React.FC<PaginationInterface> = ({
  pagesCount,
  page = '1',
}) => {
  const router = useRouter()

  const routerPushHandler = (page) => {
    const { asPath, query } = router
    let link
    if (asPath.includes('&page=')) {
      link = asPath.replace(`&page=${query?.page}`, `&page=${page}`)
    } else {
      link = asPath + `&page=${page}`
    }

    router.push(link)
  }

  const pageInt = parseInt(page)
  let paginationButton1 = pageInt - 3 < 0 ? '1' : (pageInt - 2).toString()
  let paginationButton2 = pageInt - 3 < 0 ? '2' : (pageInt - 1).toString()
  let paginationButton3 = pageInt - 3 < 0 ? '3' : pageInt.toString()

  return (
    <div className={styles.pagination}>
      <Button
        name="Previous"
        type="pageText"
        disabled={page === '1'}
        onClick={() => {
          routerPushHandler((pageInt - 1).toString())
        }}
      />

      <Button
        name={paginationButton1}
        type="pageNum"
        disabled={paginationButton1 === page}
        onClick={() => {
          routerPushHandler('1')
        }}
      />
      {pagesCount > 1 && (
        <Button
          name={paginationButton2}
          type="pageNum"
          disabled={paginationButton2 === page}
          onClick={() => {
            routerPushHandler('2')
          }}
        />
      )}
      {pagesCount > 2 && (
        <Button
          name={paginationButton3}
          type="pageNum"
          disabled={paginationButton3 === page}
          onClick={() => {
            routerPushHandler('3')
          }}
        />
      )}

      {pagesCount > 3 && pageInt < pagesCount && (
        <Button
          name="..."
          type="pageNum"
          onClick={() => {
            routerPushHandler((pageInt + 1).toString())
          }}
        />
      )}

      <Button
        name="Next"
        type="pageText"
        onClick={() => {
          routerPushHandler((pageInt + 1).toString())
        }}
        disabled={pageInt === pagesCount}
      />
    </div>
  )
}

export default Pagination
