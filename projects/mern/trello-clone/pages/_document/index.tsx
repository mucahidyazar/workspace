import Document, { Head, Main, NextScript } from 'next/document'
import '../../public/static/assets/styles/main.scss'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="description" content="A site for my programming" />
          <meta charSet="UTF-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          html,
          body,
          div#__next {
            height: 100%;
          }
        `}</style>
      </html>
    )
  }
}
