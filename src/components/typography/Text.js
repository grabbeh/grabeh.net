import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import { space, layout, color, typography } from 'styled-system'

export const caps = props =>
  props.caps
    ? {
        textTransform: 'uppercase'
      }
    : null

const Text = styled('div')(typography, space, color, caps, layout)

Text.displayName = 'Text'

Text.propTypes = {
  ...propTypes.space,
  ...propTypes.typography,
  color: PropTypes.string
}

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')
Text.h1 = Text.withComponent('h1')
Text.h2 = Text.withComponent('h2')
Text.h3 = Text.withComponent('h3')
Text.sup = Text.withComponent('sup')

export default Text
