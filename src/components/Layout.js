import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import '../index.css'
import '../react.css'

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width' />
      <title>grabeh.net</title>
    </Helmet>
    <div>{children}</div>
  </div>
)

export default Layout
