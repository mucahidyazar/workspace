import MainLayout from '../../views/layouts/Main'
import Path from '../../views/components/Path'
import DetailComp from '../../views/components/Detail'
import Catalog from '../../views/components/Catalog'

interface DetailProps {
  data: any
}

const Detail: React.FC<DetailProps> = ({ data }) => {
  return (
    <MainLayout title="Detail Page">
      <Path />
      {data.Genre && (
        <div className="container">
          <DetailComp data={data} />
        </div>
      )}
      <Catalog />
    </MainLayout>
  )
}

export async function getServerSideProps(ctx) {
  const id = ctx.query.id
  const type = ctx.query.type
  const year = ctx.query.y

  if (!id || !type || !year) {
    ctx.res.setHeader('location', '/404')
    ctx.res.statusCode = 302
    ctx.res.end()
  }

  const res = await fetch(
    `https://www.omdbapi.com/?i=${id}&type=${type}&y=${year}&plot=full&apikey=${process.env.OMDB_API}`
  )
  const data = await res.json()

  if (!data || !data.Genre) {
    ctx.res.setHeader('location', '/404')
    ctx.res.statusCode = 302
    ctx.res.end()
  }

  return { props: { data } }
}

export default Detail
