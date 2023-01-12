import styles from "./styles.module.scss";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

const Layout = ({ children, title, description, backButton }: any) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <div className={styles.container}>
      <nav className={styles.nav}>
        {backButton ? <span onClick={() => Router.back()} className={styles.nav__back}>&#x2b05;</span> : null}
        <Link href="/">
          <a>
            <span className={styles.main__title}>Hacker Next</span>
          </a>
        </Link>
      </nav>
      {children}
    </div>
  </div>
);

export default Layout;
