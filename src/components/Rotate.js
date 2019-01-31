import styled from 'styled-components'
import { style } from 'styled-system'
import Box from './Box'
import theme from './theme'
import PropTypes from 'prop-types'

const skew = style({
  prop: 'transform',
  cssProperty: 'transform',
  key: 'rotate',
  transformValue: n => {
    return `rotate(-${n}deg)`
  },
  // add a fallback scale object or array, if theme is not present
  scale: [10, 20, 30, 40, 50, 60, 70, 80]
})

const Rotate = styled(Box)`
  transform-origin: 0;
  ${skew};
`

Rotate.displayName = 'Rotate'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Rotate.propTypes = {
  transform: numberStringOrArray,
  skew: PropTypes.number
}

Rotate.defaultProps = {
  theme: theme
}

export default Rotate
