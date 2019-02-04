import React from 'react'
import Box from './Box'
import Text from './Text'
import MdClose from 'react-icons/lib/md/close'

const Toast = (props) =>  (
  <Box zIndex={999} p={3} bg='yellow' position='absolute' top={10} right={10}>
    <Text color='black' fontWeight='bold' fontSize={4}>{props.message}</Text>
      <Flex justifyContent='flex-end'>
       <Box onClick={props.remove} p={2}>
        <MdClose />
      </Box>
    </Flex>
  </Box>)


export default Toast
