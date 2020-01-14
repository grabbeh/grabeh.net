import styled from '@emotion/styled'
import { layout, space, border, typography, color } from 'styled-system'
import propTypes from '@styled-system/prop-types'

const ListItem = styled('li')(
  {
    listStyle: 'none'
  },
  space,
  layout,
  color,
  border,
  typography
)

ListItem.displayName = 'ListItem'

ListItem.propTypes = {
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.position
}

export default ListItem
