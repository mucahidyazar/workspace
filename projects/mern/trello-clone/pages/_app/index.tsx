import App, { AppProps, AppContext, AppInitialProps } from 'next/app'
import { appWithTranslation } from '../../config/i18n'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../../redux'
import '../../public/static/assets/styles/main.scss'

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

export default withRedux(makeStore)(appWithTranslation(MyApp))
//export default appWithTranslation(withRedux(makeStore)(MyApp))

// import App, { AppInitialProps, AppProps, AppContext } from "next/app";
// import { appWithTranslation } from "../../config/i18n";
// import { Provider } from "react-redux";
// import withRedux from "next-redux-wrapper";
// import { makeStore } from "../../redux";
// import { AppWithStore } from "../../config/interfaces";

// class MyApp extends App<AppWithStore> {
//   static async getInitialProps({
//     Component,
//     ctx,
//   }: AppContext): Promise<AppInitialProps> {
//     const pageProps = Component.getInitialProps
//       ? await Component.getInitialProps(ctx)
//       : {};

//     return { pageProps };
//   }

//   render() {
//     const { Component, pageProps, store } = this.props;

//     return (
//       <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider>
//     );
//   }
// }

// export default withRedux(makeStore)(appWithTranslation(MyApp));
