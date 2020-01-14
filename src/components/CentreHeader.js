import React from 'react'
import { Text } from './typography'
import { Flex } from './general'

export default props => (
  <Flex flexDirection='column' justifyContent='center'>
    <Text textAlign='center'> {props.children}</Text>
  </Flex>
)
