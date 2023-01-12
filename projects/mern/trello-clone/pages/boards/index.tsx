import Head from 'next/head'
import axios from 'axios'
import styles from './styles.module.scss'
import { withTranslation } from '../../config/i18n/index'
import { connect } from 'react-redux'
import MainLayout from '../../views/layouts/Main'
import SideMenu from '../../views/layouts/SideMenu'
import { personal, recentlyViewed, templates } from '../../config/dummy/boards'
import BoardsGroup from '../../views/components/BoardsGroup'

function Home({ t, templates, recentlyViewed, personal }) {
  return (
    <MainLayout title="Home Page" className={styles.container}>
      <SideMenu />
      <div className={styles.boards}>
        <div className={styles.boardsGroup}>
          <div className={styles.boardTitle}></div>
        </div>
        <BoardsGroup category boards={templates} />
        <BoardsGroup boards={recentlyViewed} />
        <BoardsGroup add boards={personal} />
      </div>
    </MainLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    templates: state.boards.templates,
    recentlyViewed: state.boards.recentlyViewed,
    personal: state.boards.personal,
  }
}

export default connect(mapStateToProps)(withTranslation('common')(Home))
