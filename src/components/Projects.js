import React from 'react'
import { Box, Flex } from './general'
import { Text } from './typography'

const Project = ({ projectName, description, tools }) => (
  <Box width={[1, 1 / 2]}>
    <Box boxShadow='10px 10px black' mr={4} mb={4} p={3} bg='white'>
      <Text fontFamily='heading' fontWeight='bold' fontSize={6}>
        {projectName}
      </Text>
      <Text.p>{description}</Text.p>
      <Flex flexWrap='wrap'>
        {tools.map(t => (
          <Box color='white' bg='dark-blue' mb={2} p={2} mr={2}>
            <Text fontWeight='bold'>{t.tool}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  </Box>
)

const Projects = ({ projects }) => (
  <Box>
    <Flex justifyContent='space-around' flexWrap='wrap'>
      {projects.map(p => (
        <Project {...p} />
      ))}
    </Flex>
  </Box>
)

export default Projects
