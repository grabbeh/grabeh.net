/** @jsx jsx */
import { jsx } from 'theme-ui'
import Box from './Box'
import Flex from './Flex'

const StandardSection = ({
  variant,
  bg,
  children,
  px,
  pt = [4, 5],
  pb = [4, 5]
}) => (
  <section>
    <Box sx={{ variant }} bg={bg}>
      <Flex justifyContent='center'>
        <Box px={px} mx={3} width={1} maxWidth={1024} pb={pb} pt={pt}>
          {children}
        </Box>
      </Flex>
    </Box>
  </section>
)

export default StandardSection
