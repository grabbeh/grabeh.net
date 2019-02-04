import Box from './Box'
import Text from './Text'

const Toast = ({message}) => (
  <Box p={3} bg='yellow' position='absolute' bottom={10} right={10}>
    <Text color='black' fontWeight='bold' fontSize={4}>{message}</Text>
  </Box>
)

export default Toast
