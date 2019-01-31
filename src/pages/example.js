import React, { useState } from 'react'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Text from '../components/Text'
import Image from '../components/Image'
import Link from '../components/Link'
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
  
  const [backgroundColor, setBackgroundColor] = useState('white')
  const [textColor, setTextColor] = useState('black')
  
  function changeColors(color) {
    console.log(color)
    setBackgroundColor(color)
    let text = getTextColor(color)
    setTextColor(text)
  }
  
  return (
    <Layout>
      <Box>
        <Box>
          <Box bg={backgroundColor}>
            <Flex flexWrap='wrap'>
              {Object.keys(colors).map((k, i) => {
                let color = colors[k]                      
                return (
                <Box
                  onClick={() => {changeColors(color)}}
                  fontSize={5}
                  height={20}
                  width={[1/3, 0.2, 0.1]}
                  key={i}
                  bg={color}
                />
              )})}
            </Flex>
          </Box>
          <Box bg={backgroundColor}>
            <Box bg={backgroundColor} pt={3} pl={3}>
              <Text color={textColor} fontWeight='bold' fontSize={7}>
                Michael
              </Text>
            </Box>
            <Box bg={backgroundColor} mt={3} pl={3}>
              <Text color={textColor} fontSize={5}>
                Lawyer/coder. Based in London, UK
              </Text>
            </Box>
            <Box bg={backgroundColor}>
              <Box pl={3} my={3}>
                <Text color={textColor} fontSize={5} fontWeight='bold'>
                  PROJECTS
                </Text>
              </Box>
              <Box bg={backgroundColor}>
                <Flex flexWrap='wrap'>
                  {allProjectsJson.edges.map(({ node: { imageUrl, projectName } }, i) => {
                    return (
                      <Box position='relative' key={i} width={[1, 0.3, 0.2]}>
                        <Image src={imageUrl} />
                        <Box bg={backgroundColor} position='absolute' right={0} top={0} p={2}>
                          <Text color={textColor} fontSize={2}>{projectName}</Text>
                        </Box>
                      </Box>
                    )
                  })}
                </Flex>
              </Box>
            </Box>
            <Box py={3} bg='g-red'>
              <Box pl={3} mb={3}>
                <Text color='black' fontSize={5} fontWeight='bold'>
                  TOOLS & INTEGRATIONS
                </Text>
              </Box>
              <Box pl={3}>
                <Flex flexWrap='wrap'>
                  {uniq.map(i => (
                    <Box pb={3} pr={3}>
                      <Text color='g-pink' fontSize={3} fontWeight='bold'>
                        {i}
                      </Text>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Box>
            <Box height={300} bg='black'>
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
                    <Link href='https://twitter.com/grabbeh'>@grabbeh</Link>
                  </Text>
                </Box>
                <Text fontSize={4} color='white'>
                  <FaGit
                    style={{ color: 'white', marginRight: '10px' }}
                    size={40}
                  />
                  <Link href='https://github.com/grabbeh'>grabbeh</Link>
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
  white: '#ffffff',
  black: '#000000',
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
  'hot-pink': ' #ff41b4',
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


