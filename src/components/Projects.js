/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Card, Badge, Flex, Text, Heading } from '@theme-ui/components'

const Project = ({ projectName, description, tools }) => (
  <Card variant='primary'>
    <Heading as='h3'>{projectName}</Heading>
    <Text
      as='p'
      sx={{
        fontSize: 4,
        fontFamily: 'body',
        pb: 3
      }}
    >
      {description}
    </Text>
    <Flex sx={{ flexWrap: 'wrap' }}>
      {tools.map(t => (
        <Badge
          variant='primary'
          sx={{
            flex: '0 0 auto',
            flexWrap: 'wrap'
          }}
        >
          <Text sx={{ fontSize: 3, fontFamily: 'body' }}>{t.tool}</Text>
        </Badge>
      ))}
    </Flex>
  </Card>
)

const Projects = ({ projects }) => (
  <Grid columns={[1, 2, 2]}>
    {projects.map(p => (
      <Project {...p} />
    ))}
  </Grid>
)

export default Projects
