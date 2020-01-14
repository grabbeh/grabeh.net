import React from 'react'
import { Box, Flex } from './general'
import { Text } from './typography'

const Project = ({ projectName, description, tools }) => (
  <Box width={[1, 1 / 2]}>
    <Box mr={[0, 4]} py={3}>
      <Text
        style={{ textDecoration: 'underline red' }}
        fontFamily='heading'
        fontWeight='bold'
        fontSize={6}
      >
        {projectName}
      </Text>
      <Text.p fontFamily='body' fontSize={4}>
        {description}
      </Text.p>
      <Flex flexWrap='wrap'>
        {tools.map(t => (
          <Box color='white' bg='dark-blue' mb={2} p={2} mr={2}>
            <Text fontFamily='body' fontWeight='bold'>
              {t.tool}
            </Text>
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
