import React from 'react'
import Text from './Text'

const SectionTitle = props => (
  <Text.h1
    {...props}
    fontFamily='heading'
    lineHeight={['medium', 'tagline']}
    fontWeight='bold'
    color={props.color || 'black'}
    fontSize={[5, 6]}
    my={0}
    mb={3}
  >
    {props.text || props.children}
  </Text.h1>
)

export default SectionTitle
