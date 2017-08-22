import Head from 'next/head'
import React from 'react'

export default () => (
  <div>
    <Head>
      <meta name='theme-color' content='#f94f44' />
      <meta name='msapplication-navbutton-color' content='#f94f44' />
      <meta name='apple-mobile-web-app-status-bar-style' content='#f94f44' />
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width' />
      <title>Grabeh.net</title>
      <link
        rel='stylesheet'
        href='https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Roboto:400,700'
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
      <script src='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/highlight.min.js' />
      <script>
        hljs.initHighlightingOnLoad()
      </script>

    </Head>
    <style jsx global>
      {`
    body {
      font-family: 'Roboto', serif;
      background-color:  #ff725c;
    }

    .grey {
      color: rgba(0, 0, 0, .4)
    }
    `}
    </style>
  </div>
)
