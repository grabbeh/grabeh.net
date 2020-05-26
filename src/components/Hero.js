/** @jsx jsx */
import { jsx, Box, Flex, Text, Container, Image, Link } from 'theme-ui'
import { css } from '@emotion/core'
import { useState } from 'react'
import Layout from '../components/Layout'
import Animation from '../components/animations/ScrollAnimation'
import styled from '@emotion/styled'
import useInterval from '../hooks/useInterval'

const NewYorkTimes = () => {
  const [textIndex, setTextIndex] = useState(0)
  const totalMessages = 2

  useInterval(() => {
    //console.log(textIndex)
    let index = textIndex < totalMessages ? textIndex + 1 : 0
    setTextIndex(index)
  }, 3000)

  return (
    <Layout>
      <Container>
        <Flex sx={{ justifyContent: 'center' }}>
          <Animation>
            <Container sx={{ my: [2, 4], width: ['100%', '75%'] }}>
              <NormalText>
                Hi, I'm Michael Goulbourn. My day job is as a{' '}
                <FullActiveLink
                  activeBackground='#FCEEAC'
                  active={textIndex === 0}
                  href='https://linkedin.com/in/mgoulbourn'
                >
                  lawyer
                </FullActiveLink>{' '}
                for Zopa. In my spare time, I like{' '}
                <FullActiveLink
                  activeBackground='#6dffa8'
                  active={textIndex === 1}
                  href='https://github.com/grabbeh'
                >
                  writing bad JavaScript
                </FullActiveLink>
                . Here's some of my{' '}
                <FullActiveLink
                  activeBackground='#96ccff'
                  active={textIndex === 2}
                  href='/'
                >
                  projects
                </FullActiveLink>{' '}
                (other than the ones in stealth mode).
              </NormalText>
            </Container>
            <Container>
              <Flex sx={{ justifyContent: 'center' }}>
                <Box
                  sx={{
                    height: ['100vh', '400px'],
                    width: ['100%', '300px'],
                    position: 'relative'
                  }}
                >
                  <ActivePhoto active={textIndex === 0}>
                    <Image src='/norway.jpeg' />
                  </ActivePhoto>
                  <ActivePhoto active={textIndex === 1}>
                    <Image src='/cabin.jpg' />
                  </ActivePhoto>
                  <ActivePhoto active={textIndex === 2}>
                    <Image src='/beach.jpg' />
                  </ActivePhoto>
                </Box>
              </Flex>
            </Container>
          </Animation>
        </Flex>
      </Container>
    </Layout>
  )
}

const backgroundColor = props =>
  props.active &&
  css`
    background-color: ${props.activeBackground};
  `

const hover = props => css`
  &:hover {
    background-color: ${props.activeBackground};
  }
`

const ActiveLink = styled(Link)`
  transition: background-color 0.5s ease-in-out;
  ${backgroundColor};
  ${hover}
`

const FullActiveLink = props => (
  <ActiveLink
    sx={{
      fontFamily: 'serif',
      fontSize: [4, 5],
      fontWeight: 'bold',
      lineHeight: '1.5em',
      py: 1,
      textDecoration: 'none'
    }}
    {...props}
  >
    {props.children}
  </ActiveLink>
)

const NormalText = props => (
  <Text
    as='p'
    sx={{
      fontFamily: 'serif',
      fontSize: [4, 5],
      lineHeight: '1.5em',
      py: 1
    }}
  >
    {props.children}
  </Text>
)

const ActivePhoto = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  height: 100%;
  transition: opacity 0.5s ease-in;
  ${props =>
    props.active &&
    css`
      opacity: 1;
    `}
`

export default NewYorkTimes
