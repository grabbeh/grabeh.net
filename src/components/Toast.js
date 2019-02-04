import React from 'react'
import Box from './Box'
import Text from './Text'
import Flex from './Flex'
import MdClose from 'react-icons/lib/md/close'

const Toast = (props) =>  (
    <Box zIndex={999}  p={3} bg='yellow' position='absolute' top={10} right={10}>
      <Flex flexWrap='wrap'>
        <Box width={0.8}>
           <Text color='black' fontWeight='bold' fontSize={4}>{props.message}</Text>
        </Box>
       <Box width={0.1} onClick={props.remove}>
        <MdClose />
      </Box>
  </Flex>
  </Box>
)


export default Toast
