import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Flex from '../components/Flex'
import Box from '../components/Box'
import Text from '../components/Text'

const postTemplate = props => {
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark
  const { date, title } = frontmatter
  return (
    <Layout>
      <Flex justifyContent='center'>
        <Box mt={2} p={3} width={[1, 0.8, 0.6]} maxWidth={1200}>
          <Text fontSize={5} fontWeight='bold'>
            {title}
          </Text>
          {date && (
            <Flex justifyContent='flex-end'>
              <Box mt={2}>{date}</Box>
            </Flex>
          )}
          <Text
            lineHeight='1.5'
            fontSize={3}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Box>
      </Flex>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`

export default postTemplate
