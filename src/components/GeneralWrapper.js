/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import { ThemeProvider, css, Container, Box } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui/index'
import '../index.css'
require('typeface-domine')

const styles = css`
  * {
    box-sizing: border-box;
  }
  html {
    100%;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: white;
  }
`

const Wrapper = props => {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])
  return (
    <Fragment>
      <Helmet>
        <html lang='en' />
        <title>mbg.codes</title>
      </Helmet>
      <Global styles={styles} />
      <ThemeProvider theme={theme}>
        {showChild && (
          <Box sx={{ fontFamily: 'serif' }}>
            <Container
              sx={{
                width: '100%',
                height: '100%',
                px: [2, 4, 6],
                pb: 5
              }}
            >
              {props.children}
            </Container>
          </Box>
        )}
      </ThemeProvider>
    </Fragment>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
