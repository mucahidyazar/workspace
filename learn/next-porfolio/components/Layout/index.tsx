import Link from "next/link";
import styles from "./styles.module.scss";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on(`routeChangeStart`, url => {
  console.log(url);
  NProgress.start();
});
Router.events.on(`routeChangeComplete`, () => {
  NProgress.done();
});
Router.events.on(`routeChangeError`, () => {
  NProgress.done();
});

const Layout = ({ children, title }) => (
  <div className="root">
    <Head>
      <title>Next Portfolio</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
      />
    </Head>
    <header className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/hireme">Hire Me</Link>
      <Link href="/blog">Blog</Link>
    </header>
    <h1>{title}</h1>
    {children}
    <footer className={styles.footer}>&copy; {new Date().getFullYear()}</footer>
    <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    `}</style>
    <style global jsx>{`
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
      }
      font-size: 110%;
      background: #f0f0f0;
    `}</style>
  </div>
);

export default Layout;
//Aslinda yukarisi props.children ES6 kullanilmis
