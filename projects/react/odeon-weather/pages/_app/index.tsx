import '../../public/static/assets/styles/main.scss'
import { AppProps, AppContext, AppInitialProps } from 'next/app'
import { appWithTranslation } from '../../config/i18n'
import { wrapper } from '../../redux/store'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

MyApp.getInitialProps = async function ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}

  return { pageProps }
}

export default wrapper.withRedux(appWithTranslation(MyApp))
