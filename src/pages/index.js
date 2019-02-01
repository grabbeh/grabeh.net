import React, { useState } from 'react'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Text from '../components/Text'
import Image from '../components/Image'
import ExternalLink from '../components/ExternalLink'
import StyledLink from '../components/Link'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import FaGit from 'react-icons/lib/fa/github'
import FaTwitter from 'react-icons/lib/fa/twitter'
import _ from 'lodash'
import hexRgb from 'hex-rgb'
import colors from '../components/Colors'
import Masonry from 'react-masonry-component'

const Example = ({ data: { allProjectsJson, allPostsJson } }) => {
  let tools = allProjectsJson.edges.map(({ node }) => {
    return node.tools
  })
  let uniq = _.uniq(
    _.flatten(tools).map(i => {
      return i.tool
    })
  ).sort()

  let hexValues = _.values(colors)
  let posts = allPostsJson.edges.map(({ node }) => {
    return node
  })

  const [backgroundColor, setBackgroundColor] = useState('white')
  const [textColor, setTextColor] = useState('black')

  function changeColors (color) {
    setBackgroundColor(color)
    let text = getTextColor(color)
    setTextColor(text)
  }

  let childItems = allProjectsJson.edges.map(
    ({ node: { imageUrl, projectName } }, i) => {
      return (
        <Box position='relative' key={i} width={[1, 0.5, 1 / 4]}>
          <Image src={imageUrl} />
          <Box bg='yellow' position='absolute' right={0} top={0} p={1}>
            <Text fontWeight='bold' color='black' fontSize={2}>
              {projectName}
            </Text>
          </Box>
        </Box>
      )
    }
  )

  return (
    <Layout>
      <Box>
        <Box bg={backgroundColor}>
          <Box>
            <Flex justifyContent='center' flexWrap='wrap'>
              {hexValues.map((color, i) => {
                return (
                  <Box
                    onClick={() => {
                      changeColors(color)
                    }}
                    fontSize={5}
                    height={20}
                    width={[0.2, 0.04]}
                    key={i}
                    bg={color}
                  />
                )
              })}
            </Flex>
          </Box>
          <Box>
            <Box pt={5} pb={4} px={3}>
              <Text color={textColor} fontWeight='bold' fontSize={5}>
                Hi, my name's Michael, I live and work in London.
              </Text>
              <Text color={textColor} fontSize={3}>
                In my spare time I like to{' '}
                <strike>craft artisanal JavaScript applications</strike> write
                bad JavaScript, and scour Github issues and Stackoverflow, until
                my code, often for reasons I cannot fathom, runs. Currently I
                love using React, GraphQL, Gatsby, Next and styled-system.
              </Text>
            </Box>
            <Box>
              <Box pl={3} mb={1}>
                <Text color={textColor} fontSize={5} fontWeight='bold'>
                  PROJECTS
                </Text>
              </Box>
              <Box>
                <Masonry>{childItems}</Masonry>
              </Box>
            </Box>
            <Box pl={3} py={3} bg='g-red'>
              <Box mb={1}>
                <Text color='black' fontSize={5} fontWeight='bold'>
                  TOOLS & INTEGRATIONS
                </Text>
              </Box>
              <Box>
                <Flex flexWrap='wrap'>
                  {uniq.map(i => (
                    <Box key={i} pb={3} pr={3}>
                      <Text color='g-pink' fontSize={3} fontWeight='bold'>
                        {i}
                      </Text>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Box>
            <Box p={3}>
              <Box mb={1}>
                <Text color={textColor} fontSize={5} fontWeight='bold'>
                  WRITING
                </Text>
              </Box>
              {posts.map(p => (
                <Box key={p.title} pb={3}>
                  <StyledLink to={p.path}>
                    <Text fontWeight='bold' color={textColor} fontSize={3}>
                      {p.title}
                    </Text>
                  </StyledLink>
                </Box>
              ))}
            </Box>
            <Box bg='black'>
              <Box py={3} pl={3}>
                <Box mb={1}>
                  <Text color='white' fontWeight='bold' fontSize={5}>
                    LINKS
                  </Text>
                </Box>
                <Box mb={2}>
                  <Text fontSize={4} color='white'>
                    <FaTwitter
                      style={{ color: 'white', marginRight: '10px' }}
                      size={40}
                    />
                    <ExternalLink href='https://twitter.com/grabbeh'>
                      @grabbeh
                    </ExternalLink>
                  </Text>
                </Box>
                <Text fontSize={4} color='white'>
                  <FaGit
                    style={{ color: 'white', marginRight: '10px' }}
                    size={40}
                  />
                  <ExternalLink href='https://github.com/grabbeh'>
                    grabbeh
                  </ExternalLink>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query exampleQuery {
    allPostsJson {
      edges {
        node {
          title
          path
        }
      }
    }
    allProjectsJson {
      edges {
        node {
          projectName
          description
          imageUrl
          sourceUrl
          siteUrl
          longDescription
          tools {
            tool
            id
          }
          id
          mainColor
          shadowColor
        }
      }
    }
  }
`

const getTextColor = hex => {
  let rgb = hexRgb(hex, { format: 'array' })
  let a = 1 - (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255
  let textColor = a < 0.5 ? 'black' : 'white'
  return textColor
}

export default Example
