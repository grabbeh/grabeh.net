import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import { ThemeProvider, css } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui/index'
import '../index.css'
import { Link, Box, Flex } from '../components/general'
import { List, ListItem, OrderedList, Table } from '../components/mdx'

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
        <Box bg='yellow'>
          <Flex justifyContent='center'>
            <Box maxWidth={1024} width={1} px={[2, 3]}>
              {props.children}
            </Box>
          </Flex>
        </Box>
      </ThemeProvider>
    </Fragment>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
