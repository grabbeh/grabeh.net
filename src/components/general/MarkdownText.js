import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../typography'

const MarkdownText = props => (
  <Text
    {...props}
    dangerouslySetInnerHTML={{
      __html: props.html
    }}
  />
)

MarkdownText.propTypes = {
  html: PropTypes.string.isRequired
}

export default MarkdownText
