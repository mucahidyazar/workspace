import Link from 'next/link';
import styles from './styles.module.scss';

const Layout = ({ title, children }) => (
  <div className={styles.root}>
    <div className={styles.navbar}>
      <span>Welcome, <strong>Guest</strong></span>

      <div>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </div>
      <div>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
    </div>
    <h1>{title}</h1>
    {children}
  </div>
)

export default Layout;