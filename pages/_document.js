import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const styles = flush()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name='theme-color' content='#fff1e0' />
          <meta name='msapplication-navbutton-color' content='#fff1e0' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='#fff1e0'
          />
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width' />
          <title>grabeh.net</title>
          <link
            rel='stylesheet'
            href='https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Roboto:400,700'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css?family=PT+Serif:400,700'
            rel='stylesheet'
          />
          <link
            href='https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css'
            rel='stylesheet'
          />
          <link
            href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/styles/dracula.min.css'
            rel='stylesheet'
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
             
              .font {
                font-family: 'PT Serif';
              }

              .bg-ft {
                background: #fff1e0;
              }

              `
            }}
          />

          <style jsx global>
            {`
    body {
      font-family: 'Roboto', serif;
     
    }

    .bg-ft {
      background: #fff1e0;
    }

    .font {
      font-family: 'PT Serif';
    }

    img {
      margin: 0;
      padding: 0;
    }
    
    .height {
      height: 100vh;
      top: 0;
      bottom: 0;
    }

    `}
          </style>
        </Head>
        <body className='bg-ft dark-gray'>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
