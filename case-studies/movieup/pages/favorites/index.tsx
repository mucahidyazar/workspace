import styles from './styles.module.scss'
import { connect } from 'react-redux'
import MainLayout from '../../views/layouts/Main'
import SearchBox from '../../views/components/SearchBox'
import Path from '../../views/components/Path'
import CategoryTitle from '../../views/components/CategoryTitle'
import GroupOne from '../../views/components/Groups/GroupOne'
import { useRouter } from 'next/router'
import { getFavorites } from '../../redux/actions'
import { useEffect } from 'react'
import Pagination from '../../views/ui/Pagination'

interface FavoritesProps {
  dispatch: any
  favorites: []
}

const Favorites: React.FC<FavoritesProps> = ({ dispatch, favorites }) => {
  useEffect(() => {
    dispatch(getFavorites())
  }, [])

  const router = useRouter()
  const { pathname } = router
  const path = pathname.slice(1)

  return (
    <MainLayout title="Favorites Page">
      <Path path={path} />
      <SearchBox />
      <CategoryTitle title="Favorites" />
      {favorites && favorites.length ? (
        <GroupOne data={favorites} />
      ) : (
        <div className={'container' + ' ' + styles.noContent}>
          <h4>There is no content. You can search and add some movies.</h4>
        </div>
      )}

      <Pagination page="1" pagesCount={Math.ceil(favorites.length / 6)} />
    </MainLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    favorites: state.main.favorites,
  }
}

export default connect(mapStateToProps)(Favorites)
