import React, { useState, useEffect, Fragment } from 'react'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Text from '../components/Text'
import Image from '../components/Image'
import ExternalLink from '../components/ExternalLink'
import StyledLink from '../components/Link'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { FaPlay, FaTwitter, FaGit, FaStop, FaTrash } from 'react-icons/fa'
import { MdClose, MdSave } from 'react-icons/md'
import _ from 'lodash'
import hexRgb from 'hex-rgb'
import colors from '../components/Colors'
import Masonry from 'react-masonry-component'
import SideBarSlide from '../components/SideBar'
import Toast from '../components/Toast'
import ToastSlide from '../components/Slide'

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

  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF')
  const [textColor, setTextColor] = useState('#000000')
  const [job, storeJob] = useState(null)
  const [cycling, setCycling] = useState(false)
  const [activeNotification, setActiveNotification] = useState(false)
  const [notification, setNotification] = useState(null)
  const [activeSideBar, setActiveSideBar] = useState(false)
  const [project, setProject] = useState(null)

  const changeColors = color => {
    if (color !== backgroundColor) {
      setBackgroundColor(color)
      setTextColor(getTextColor(color))
    }
  }

  const remove = () => {
    setActiveNotification(false)
  }

  function toggle (project) {
    if (!activeSideBar) {
      setActiveSideBar(true)
      setProject(project)
    } else {
      setActiveSideBar(false)
    }
  }

  const stop = () => {
    clearInterval(job)
    setCycling(false)
  }

  const cycle = () => {
    let counter = 0
    if (!cycling) {
      let job = setInterval(() => {
        if (counter < hexValues.length && !cycling) {
          let color = hexValues[counter]
          setBackgroundColor(color)
          setTextColor(getTextColor(color))
          counter++
          storeJob(job)
        } else {
          counter = 0
        }
      }, 500)
      setCycling(true)
    }
  }

  const trash = async () => {
    await localStorage.setItem('background-color', JSON.stringify('#FFFFFF'))
    setBackgroundColor('#FFFFFF')
    setTextColor('#000000')
    setActiveNotification(true)
    setNotification('Preference deleted ¬_¬')
  }

  const save = async () => {
    const saved = JSON.parse(localStorage.getItem('background-color'))
    if (saved !== backgroundColor) {
      await localStorage.setItem(
        'background-color',
        JSON.stringify(backgroundColor)
      )
      setActiveNotification(true)
      setNotification('Preference saved!')
    }
  }

  useEffect(() => {
    const savedBG = JSON.parse(localStorage.getItem('background-color'))
    if (savedBG) {
      setBackgroundColor(savedBG)
      setTextColor(getTextColor(savedBG))
    }
  }, [])

  let images = allProjectsJson.edges.map(({ node }, i) => {
    return (
      <Box
        onClick={() => {
          toggle(node)
        }}
        key={i}
        width={[1, 0.5, 1 / 4]}
      >
        <Box m={3} position='relative'>
          <Image src={node.imageUrl} />
          <Box bg='yellow' position='absolute' right={-10} top={-15} p={1}>
            <Text fontWeight='bold' color='black' fontSize={2}>
              {node.projectName}
            </Text>
          </Box>
        </Box>
      </Box>
    )
  })

  const FullSlide = () => (
    <SideBarSlide active={activeSideBar}>
      <SlideContent toggle={toggle} project={project} />
    </SideBarSlide>
  )

  return (
    <Layout>
      <Fragment>
        <ToastSlide active={activeNotification}>
          <Toast remove={remove} message={notification} />
        </ToastSlide>

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
              <Box ml={3} onClick={cycle} height={20}>
                <Text color={textColor}>
                  <FaPlay />
                </Text>
              </Box>
              <Box ml={3} onClick={stop} height={20}>
                <Text color={textColor}>
                  <FaStop />
                </Text>
              </Box>
              <Box ml={3} onClick={save} height={20}>
                <Text color={textColor}>
                  <MdSave />
                </Text>
              </Box>
              <Box ml={3} onClick={trash} height={20}>
                <Text color={textColor}>
                  <FaTrash />
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box>
            <Box maxWidth={1200} pt={5} pb={4} px={3}>
              <Text color={textColor} fontWeight='bold' fontSize={5}>
                Hi, my name's Michael, I live and work in London.
              </Text>
              <Text color={textColor} fontSize={3}>
                In my spare time I like to{' '}
                <strike>craft artisanal JavaScript applications</strike> write
                error-strewn JavaScript, and scour Github issues and
                Stackoverflow, until my code, often for reasons I cannot fathom,
                runs. Currently I{' '}
                <span role='img' aria-label='heart'>
                  💓
                </span>{' '}
                using React, GraphQL, Gatsby, Next and styled-system.
              </Text>
            </Box>
            <Box>
              <Box pl={3} mb={1}>
                <Text color={textColor} fontSize={5} fontWeight='bold'>
                  PROJECTS
                </Text>
              </Box>
              <Box maxWidth={1200}>
                <Masonry>{images}</Masonry>
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
      </Fragment>
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

const SlideContent = ({ toggle, project }) => {
  return (
    <Box
      zIndex={999}
      p={3}
      width={[0.9, 0.5]}
      bg='red'
      height={'100vh'}
      position='fixed'
    >
      <Box>
        <Text fontSize={4} fontWeight='bold' />
      </Box>
      <Box position='absolute' top={10} right={10}>
        <MdClose onClick={toggle} />
      </Box>
    </Box>
  )
}

export default Example
