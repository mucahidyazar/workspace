import MainLayout from '../../views/layouts/Main'
import Header from '../../views/components/Header'
import Catalog from '../../views/components/Catalog'

function Home() {
  return (
    <MainLayout title="Home Page">
      <Header />
      <Catalog />
    </MainLayout>
  )
}

export default Home
