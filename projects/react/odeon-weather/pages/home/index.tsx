import MainLayout from '../../views/layouts/Main'
import Header from '../../views/components/Header'
import Table from '../../views/components/Table'

function Home() {
  return (
    <MainLayout title="Home Page">
      <div className="container">
        <Header />
        <Table />
      </div>
    </MainLayout>
  )
}

export default Home
