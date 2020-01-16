/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import { ThemeProvider, css } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui/index'
import '../index.css'
import { Link, Box } from '../components/general'
import { List, ListItem, OrderedList, Table } from '../components/mdx'
import { Container } from '@theme-ui/components'
require('typeface-source-serif-pro')
require('typeface-source-sans-pro')

const components = {
  a: Link,
  ol: OrderedList,
  table: Table,
  ul: List,
  li: ListItem
}

const styles = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
`

const Wrapper = props => {
  return (
    <Fragment>
      <Helmet>
        <html lang='en' />
      </Helmet>
      <Global styles={styles} />
      <ThemeProvider components={components} theme={theme}>
        <Box bg='light-blue'>
          <Container sx={{ width: '1', px: [2, 3] }}>
            {props.children}
          </Container>
        </Box>
      </ThemeProvider>
    </Fragment>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
