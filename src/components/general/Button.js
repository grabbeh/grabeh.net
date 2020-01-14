import styled from '@emotion/styled'
import {
  layout,
  space,
  shadow,
  position,
  color,
  border,
  typography
} from 'styled-system'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

const Button = styled('button')(
  {
    outline: '1px solid transparent',
    cursor: 'pointer',
    border: 0
  },
  space,
  shadow,
  layout,
  typography,
  color,
  border,
  position
)

Button.displayName = 'Button'

Button.defaultProps = {
  bg: 'white'
}

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Button.propTypes = {
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.layout,
  ...propTypes.position,
  borderColor: numberStringOrArray,
  boxShadow: numberStringOrArray,
  fontWeight: numberStringOrArray,
  height: numberStringOrArray,
  borderRadius: PropTypes.number
}

export default Button
