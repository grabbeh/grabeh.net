import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './index.css'

const Layout = ({ children, location: { pathname } }) => (
  <div>
    <Helmet>

      <meta name='theme-color' content='#fff1e0' />
      <meta name='msapplication-navbutton-color' content='#fff1e0' />
      <meta name='apple-mobile-web-app-status-bar-style' content='#fff1e0' />
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
    </Helmet>
    <div>
      <Header />
      <div className='dark-gray'>
        {children()}
      </div>
    </div>

  </div>
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout
