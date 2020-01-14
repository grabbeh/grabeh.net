import React from 'react'
import Text from './Text'

const Intro = props => (
  <Text.h3 fontWeight='body' {...props} fontSize={3} color={props.color}>
    {props.text}
  </Text.h3>
)

export default Intro
