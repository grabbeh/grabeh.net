import styled from '@emotion/styled'
import { layout, space, shadow, position, color, border } from 'styled-system'
import propTypes from '@styled-system/prop-types'

const List = styled('ul')(
  {
    margin: 0,
    padding: 0
  },
  space,
  shadow,
  layout,
  color,
  border,
  position
)

List.displayName = 'List'

List.propTypes = {
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.position
}

export default List
