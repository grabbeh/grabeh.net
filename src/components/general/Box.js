import styled from '@emotion/styled'
import { layout, space, shadow, position, color, border } from 'styled-system'
import propTypes from '@styled-system/prop-types'

const Box = styled('div')(
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

Box.displayName = 'Box'

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.position
}

export default Box
