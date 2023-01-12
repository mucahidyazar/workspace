import styles from './styles.module.scss'
import MainLayout from '../../views/layouts/Main'

function NotFound() {
  return (
    <MainLayout title="404">
      <div className={styles.notFound}>
        <img style={{ width: 500 }} src="static/assets/gif/404.gif" alt="" />
      </div>
    </MainLayout>
  )
}

export default NotFound
