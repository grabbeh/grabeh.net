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

const Example = ({ data: { allProjectsJson, allPostsJson } }) => {
  let tools = allProjectsJson.edges.map(({ node }) => {
    return node.tools
  })
  let uniq = _.uniq(
    _.flatten(tools).map(i => {
      return i.tool
    })
  ).sort()

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

  return (
    <Layout>
      <Box>
        <Box bg={backgroundColor}>
          <Box>
            <Flex flexWrap='wrap'>
              {Object.keys(colors).map((k, i) => {
                let color = colors[k]
                return (
                  <Box
                    onClick={() => {
                      changeColors(color)
                    }}
                    fontSize={5}
                    height={20}
                    width={[1 / 3, 0.2, 0.05]}
                    key={i}
                    bg={color}
                  />
                )
              })}
            </Flex>
          </Box>
          <Box>
            <Box pt={3} pl={3}>
              <Text color={textColor} fontWeight='bold' fontSize={7}>
                Michael
              </Text>
            </Box>
            <Box mt={3} pl={3}>
              <Text color={textColor} fontSize={5}>
                Lawyer/coder. Based in London, UK
              </Text>
            </Box>
            <Box>
              <Box pl={3} my={3}>
                <Text color={textColor} fontSize={5} fontWeight='bold'>
                  PROJECTS
                </Text>
              </Box>
              <Box>
                <Flex flexWrap='wrap'>
                  {allProjectsJson.edges.map(
                    ({ node: { imageUrl, projectName } }, i) => {
                      return (
                        <Box position='relative' key={i} width={[1, 0.5, 1/4]}>
                          <Image src={imageUrl} />
                          <Box
                            bg='white'
                            position='absolute'
                            right={0}
                            top={0}
                            p={2}
                          >
                            <Text fontWeight='bold' color='black' fontSize={2}>
                              {projectName}
                            </Text>
                          </Box>
                        </Box>
                      )
                    }
                  )}
                </Flex>
              </Box>
            </Box>
            <Box pl={3} py={3} bg='g-red'>
              <Box mb={3}>
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
              <Box mb={3}>
                <Text color='black' fontSize={5} fontWeight='bold'>
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
                <Box mb={3}>
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

const colors = {
  katie: '#ffefd5',
  black: '#000',
  'near-black': '#111',
  'dark-gray': '#333',
  'mid-gray': '#555',
  gray: '#777',
  silver: '#999',
  'light-silver': '#aaa',
  'moon-gray': '#ccc',
  'light-gray': '#eee',
  'near-white': '#f4f4f4',
  white: '#fff',
  'dark-red': '#e7040f',
  red: '#ff4136',
  'light-red': '#ff725c',
  orange: '#ff6300',
  gold: '#ffb700',
  yellow: '#ffd700',
  'light-yellow': '#fbf1a9',
  purple: '#5e2ca5',
  'light-purple': '#a463f2',
  'dark-pink': '#d5008f',
  'hot-pink': '#ff41b4',
  pink: '#ff80cc',
  'light-pink': '#ffa3d7',
  'dark-green': '#137752',
  green: '#19a974',
  'light-green': '#9eebcf',
  navy: '#001b44',
  'dark-blue': '#00449e',
  blue: '#357edd',
  'light-blue': '#96ccff',
  'lightest-blue': '#cdecff',
  'washed-blue': '#f6fffe',
  'washed-green': '#e8fdf5',
  'washed-yellow': '#fffceb',
  'washed-red': '#ffdfdf'
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
