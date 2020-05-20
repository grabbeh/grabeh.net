/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import { ThemeProvider, css } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui/index'
import '../index.css'
import { Container, Box } from 'theme-ui'
require('typeface-nunito')

const styles = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: white;
  }
`

const Wrapper = props => {
  return (
    <Fragment>
      <Helmet>
        <html lang='en' />
        <title>mbg.codes</title>
      </Helmet>
      <Global styles={styles} />
      <ThemeProvider theme={theme}>
        <Box sx={{ fontFamily: 'sansSerif' }} bg='light-green'>
          <Container
            sx={{
              width: '1',
              height: '100%',
              p: [2, 5]
            }}
          >
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
