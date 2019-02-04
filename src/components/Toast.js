import React from 'react'
import Box from './Box'
import Text from './Text'
import MdClose from 'react-icons/lib/md/close'

const Toast = props => (
  <Box zIndex={999} p={3} bg='yellow' position='fixed' top={10} right={10}>
    <Box width={0.8}>
      <Text color='black' fontWeight='bold' fontSize={4}>
        {props.message}
      </Text>
    </Box>
    <Box position='absolute' top={5} right={5} onClick={props.remove}>
      <MdClose />
    </Box>
  </Box>
)

export default Toast
