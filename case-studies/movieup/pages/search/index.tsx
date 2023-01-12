import fetch from 'isomorphic-unfetch'
import MainLayout from '../../views/layouts/Main'
import SearchBox from '../../views/components/SearchBox'
import Path from '../../views/components/Path'
import CategoryTitle from '../../views/components/CategoryTitle'
import GroupOne from '../../views/components/Groups/GroupOne'
import Pagination from '../../views/ui/Pagination'

interface SearchProps {
  data: any
  query: {
    value: string
    page: string
  }
}

const Search: React.FC<SearchProps> = ({ data, query }) => {
  return (
    <MainLayout title="Search Page">
      <Path />
      <SearchBox />
      <CategoryTitle title="Search results" text={query.value} />
      {query ? (
        <GroupOne data={data.Search} />
      ) : (
        <div>There is no result with ''</div>
      )}

      <Pagination
        page={query.page}
        pagesCount={Math.ceil(data.totalResults / 10)}
      />
    </MainLayout>
  )
}

export async function getServerSideProps(ctx) {
  const value = ctx.query.value
  const type = ctx.query.type
  const page = ctx.query.page
  const year = ctx.query.year

  if (!value) {
    ctx.res.setHeader('location', '/404')
    ctx.res.statusCode = 302
    ctx.res.end()
  }

  const res = await fetch(
    `https://www.omdbapi.com/?s=` +
      (value && (value !== '' ? `${value}` : 'a')) +
      (year ? (year !== '' ? `&y=${year}` : '') : '') +
      (page ? (page !== '' ? `&page=${page}` : '&page=1') : '&page=1') +
      (type ? (type !== '' ? `&type=${type}` : '') : '') +
      `&apikey=${process.env.OMDB_API}`
  )
  const data = await res.json()

  if (!data || !data.Search) {
    ctx.res.setHeader('location', '/404')
    ctx.res.statusCode = 302
    ctx.res.end()
  }

  return {
    props: { data: data || data.Error, query: { value, page: page || '1' } },
  }
}

export default Search
