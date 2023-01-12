import App from 'next/app'
import { getServerSideToken } from '../lib/auth'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const user = getServerSideToken(appContext.ctx.req)

  return { ...appProps, ...user }
}

export default MyApp;