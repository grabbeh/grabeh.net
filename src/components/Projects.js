/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Card, Box, Flex, Text, Link } from '@theme-ui/components'
import { GoMarkGithub, GoHome } from 'react-icons/go'

const Project = ({ projectName, description, tools, sourceUrl, siteUrl }) => (
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
    <Flex sx={{pb: 2, flexWrap: 'wrap'}}>
  {tools.map(t => (
    <Text sx={{ mr: 3, fontSize: 1, fontFamily:'body', color:'dark-gray', fontWeight:'bold', textTransform:'uppercase'}}>{t.tool}</Text>
  ))}
  </Flex>
    <Box sx={{ mb: 3 }}>
      <Text sx={{ pb:1, fontSize: 4, color: 'dark-gray', fontFamily: 'body' }}>
        {description}
      </Text>
    </Box>

    <Flex sx={{ flexWrap: 'wrap' }}>
      {siteUrl && (
        <Box sx={{ mr: 3 }}>
          <Link sx={{ fontSize: 6 }} href={siteUrl}>
            <GoHome />
          </Link>
        </Box>
      )}
      {sourceUrl && (
        <Link sx={{ fontSize: 6 }} href={sourceUrl}>
          <GoMarkGithub />
        </Link>
      )}
    </Flex>
  </Card>
)

const Projects = ({ projects }) => (
  <Grid gap={4} columns={[1, 2, 2]}>
    {projects.map(p => (
      <Project key={p.projectName} {...p} />
    ))}
  </Grid>
)

export default Projects
