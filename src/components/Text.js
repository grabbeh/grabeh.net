import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  fontSize,
  space,
  fontWeight,
  color,
  textAlign,
  lineHeight,
  style
} from 'styled-system'
import theme from './theme'

const skew = style({
  prop: 'transform',
  cssProperty: 'transform',
  key: 'skew',
  transformValue: n => {
    return `skewY(${n}deg)`
  },
  // add a fallback scale object or array, if theme is not present
  scale: [10, 20, 30, 40, 50, 60, 70, 80]
})

export const bold = props =>
  props.bold ? { fontWeight: props.theme.bold } : null

export const regular = props =>
  props.regular ? { fontWeight: props.theme.regular } : null

export const caps = props =>
  props.caps
    ? {
      textTransform: 'uppercase'
    }
    : null

const Text = styled.div`
  ${space} ${fontSize} ${fontWeight} ${color} ${textAlign} ${lineHeight} ${skew} ${caps} ${regular} ${bold};
`

Text.displayName = 'Text'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Text.propTypes = {
  ...space.propTypes,
  /** Font size */
  fontSize: numberStringOrArray,
  /** Alignment */
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  /** Font weight */
  fontWeight: PropTypes.string,
  /** Color */
  color: PropTypes.string
}

Text.defaultProps = {
  theme: theme
}

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text
