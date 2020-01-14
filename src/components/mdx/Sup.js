import React from 'react'
import { Text } from '../typography'

export const Sup = props => (
  <Text.sup {...props} fontSize={2} color='grey'>
    {props.children}
  </Text.sup>
)

export default Sup
