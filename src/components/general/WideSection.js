import React from 'react'
import Box from './Box'
import Flex from './Flex'

const WideSection = ({ children, px = 0, bg, pt = [4, 5], pb = [4, 5] }) => (
  <section>
    <Box bg={bg}>
      <Flex justifyContent='center'>
        <Box px={px} mx={3} width={[1, 800, 1200]} pb={pb} pt={pt}>
          {children}
        </Box>
      </Flex>
    </Box>
  </section>
)

export default WideSection
