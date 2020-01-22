/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Card, Box, Flex, Text, Link } from '@theme-ui/components'
import Animation from '../components/animations/ScrollAnimation'
import { GoMarkGithub, GoHome, GoCalendar } from 'react-icons/go'

const Project = ({
  projectName,
  description,
  tools,
  sourceUrl,
  siteUrl,
  timePeriod
}) => (
  <Card variant='primary'>
    <Text
      sx={{
        fontSize: 7,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontFamily: 'heading'
      }}
    >
      {projectName}
    </Text>
    <Flex sx={{ pb: 2, flexWrap: 'wrap' }}>
      {tools.map((tool, i) => (
        <Text
          key={i}
          sx={{
            mr: 3,
            fontSize: 1,
            fontFamily: 'body',
            color: 'dark-gray',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}
        >
          {tool}
        </Text>
      ))}
    </Flex>
    <Box sx={{ mb: 2 }}>
      <Text sx={{ pb: 1, fontSize: 4, color: 'dark-gray', fontFamily: 'body' }}>
        {description}
      </Text>
    </Box>
    <Flex sx={{ flexWrap: 'wrap' }}>
      {siteUrl && (
        <Box sx={{ mr: 3 }}>
          <Link sx={{ color: 'dark-gray', fontSize: 6 }} href={siteUrl}>
            <GoHome />
          </Link>
        </Box>
      )}
      {sourceUrl && (
        <Link sx={{ color: 'dark-gray', fontSize: 6, mr: 3 }} href={sourceUrl}>
          <GoMarkGithub />
        </Link>
      )}
      <Text sx={{ color: 'dark-gray', fontSize: 6, mr: 2 }}>
        <GoCalendar />
      </Text>
      {timePeriod && (
        <Text
          sx={{
            color: 'dark-gray',
            fontSize: 5,
            flex: '1 1 auto',
            fontFamily: 'body'
          }}
        >
          {timePeriod}
        </Text>
      )}
    </Flex>
  </Card>
)

const Projects = ({ projects }) => (
  <Grid gap={4} columns={[1, 2, 2]}>
    {projects.map((project, i) => (
      <Box key={i}>
        <Animation>
          <Project key={project.projectName} {...project} />
        </Animation>
      </Box>
    ))}
  </Grid>
)

export default Projects
