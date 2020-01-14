import styled from '@emotion/styled'
import { flexbox } from 'styled-system'
import Box from './Box'
import propTypes from '@styled-system/prop-types'

const Flex = styled(Box)({ display: 'flex' }, flexbox)

Flex.propTypes = {
  ...propTypes.flexbox
}

Flex.displayName = 'Flex'

export default Flex
