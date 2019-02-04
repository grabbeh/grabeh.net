import React from 'react'
import Box from './Box'
import Text from './Text'
import MdClose from 'react-icons/lib/md/close'

const Toast = (props) =>  (
  <Box zIndex={999} p={3} bg='yellow' position='absolute' top={10} right={10}>
    <Box onClick={props.remove} position='absolute' top={5} right={5}>
      <MdClose />
    </Box>
    <Text color='black' fontWeight='bold' fontSize={4}>{props.message}</Text>
  </Box>)


export default Toast
