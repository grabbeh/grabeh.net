/** @jsx jsx */
import { jsx, Grid, Card, Box, Flex, Text, Link } from 'theme-ui'
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
        lineHeight: '50px',
        fontSize: [5, 7],
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'donut'
      }}
    >
      {projectName}
    </Text>
    <Flex sx={{ my: [1, 2], flexWrap: 'wrap' }}>
      {tools.map((tool, i) => (
        <Text
          key={i}
          sx={{
            mr: 3,
            fontSize: '12px',
            color: 'dark-gray',
            fontWeight: 'heavy',
            textTransform: 'uppercase'
          }}
        >
          {tool}
        </Text>
      ))}
    </Flex>
    <Box sx={{ mb: 2 }}>
      <Text
        sx={{
          lineHeight: '30px',
          fontSize: [3, 4],
          color: 'dark-gray'
        }}
      >
        {description}
      </Text>
    </Box>
    <Flex sx={{ flexWrap: 'wrap' }}>
      {siteUrl && (
        <Box sx={{ mr: 3 }}>
          <Link sx={{ color: 'dark-gray', fontSize: [4, 6] }} href={siteUrl}>
            <GoHome />
          </Link>
        </Box>
      )}
      {sourceUrl && (
        <Link
          sx={{ color: 'dark-gray', fontSize: [4, 6], mr: 3 }}
          href={sourceUrl}
        >
          <GoMarkGithub />
        </Link>
      )}
      <Text sx={{ color: 'dark-gray', fontSize: [4, 6], mr: 2 }}>
        <GoCalendar />
      </Text>
      {timePeriod && (
        <Flex sx={{ alignContent: 'center' }}>
          <Text
            sx={{
              color: 'dark-gray',
              fontSize: [3, 5],
              flex: '1 1 auto'
            }}
          >
            {timePeriod}
          </Text>
        </Flex>
      )}
    </Flex>
  </Card>
)

const Projects = ({ projects }) => (
  <Box sx={{ my: [3, 5] }}>
    <Grid gap={[3, 4]} columns={[1, 2, 2]}>
      {projects.map((project, i) => (
        <Box key={i}>
          <Animation>
            <Project key={project.projectName} {...project} />
          </Animation>
        </Box>
      ))}
    </Grid>
  </Box>
)

export default Projects
