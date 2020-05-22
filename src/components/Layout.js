import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider, css } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui/index'
import { Global } from '@emotion/core'
import '../index.css'
import '../react.css'

require('typeface-domine')

const styles = css`
  * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: white;
  }
`
const Layout = props => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width' />
        <title>mbg.codes</title>
      </Helmet>
      <Global styles={styles} />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </div>
  )
}

export default Layout
