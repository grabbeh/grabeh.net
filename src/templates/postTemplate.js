import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Box, Flex, Text } from '@theme-ui/components'

const PostTemplate = props => {
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark
  const { date, title } = frontmatter

  return (
    <Layout>
      <Box>
        <Flex sx={{ justifyContent: 'center' }}>
          <Box sx={{ mt: 2, p: 3, width: [1, 0.8, 0.6], maxWidth: 1200 }}>
            <Text sx={{ color: 'black', fontSize: 5, fontWeight: 'bold' }}>
              {title}
            </Text>
            {date && (
              <Flex sx={{ justifyContent: 'flex-end' }}>
                <Box sx={{ mt: 2 }}>{date}</Box>
              </Flex>
            )}
            <Text
              sx={{
                color: 'dark-gray',
                lineHeight: '1.5',
                fontSize: 3
              }}
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
