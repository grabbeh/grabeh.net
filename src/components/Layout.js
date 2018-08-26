import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import '../index.css'
import '../react.css'

const Layout = ({ children }) => (
  <div>

    <Helmet>
      <meta name='theme-color' content='#fff1e0' />
      <meta name='msapplication-navbutton-color' content='#fff1e0' />
      <meta name='apple-mobile-web-app-status-bar-style' content='#fff1e0' />
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width' />
      <title>grabeh.net</title>
    </Helmet>
    <div>
      <Header />
      <div>
        {children}
      </div>
    </div>

  </div>
)

export default Layout
