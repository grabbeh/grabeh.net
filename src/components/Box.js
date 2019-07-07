import styled from 'styled-components'
import { layout, space, shadow, position, color, border } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import * as React from 'react'
import PropTypes from 'prop-types'
import theme from './theme'

const StyledBox = styled('div')(
  {
    boxSizing: 'border-box'
  },
  space,
  shadow,
  layout,
  color,
  border,
  position
)

// To recognise propTypes, we have to create new Box to wrap StyledBox
const Box = props => {
  return <StyledBox {...props}>{props.children}</StyledBox>
}

Box.displayName = 'Box'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Box.defaultProps = {
  theme: theme
}

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.position
}

export default Box
