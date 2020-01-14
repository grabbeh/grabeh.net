import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Box, Flex } from '../components/general'
import { Text } from '../components/typography'

const PostTemplate = props => {
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark
  const { date, title } = frontmatter

  return (
    <Layout>
      <Box>
        <Flex justifyContent='center'>
          <Box mt={2} p={3} width={[1, 0.8, 0.6]} maxWidth={1200}>
            <Text color='black' fontSize={5} fontWeight='bold'>
              {title}
            </Text>
            {date && (
              <Flex justifyContent='flex-end'>
                <Box mt={2}>{date}</Box>
              </Flex>
            )}
            <Text
              color='dark-gray'
              lineHeight='1.5'
              fontSize={3}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Box>
        </Flex>
      </Box>
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

export default PostTemplate
