import Head from 'next/head'
import axios from 'axios'
import styles from './styles.module.scss'
import { withTranslation } from '../../config/i18n/index'
import { connect } from 'react-redux'
import MainLayout from '../../views/layouts/Main'
import SideMenu from '../../views/layouts/SideMenu'

function Home({ t }) {
  return (
    <MainLayout title="Home Page" className={styles.container}>
      <SideMenu />
    </MainLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    home: state.home.home,
    image: state.home.image,
  }
}

export default connect(mapStateToProps)(withTranslation('common')(Home))
