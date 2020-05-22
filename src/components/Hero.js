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
            <Container sx={{ width: ['100%', '75%'] }}>
              <NormalText>
                Michael Goulbourn. Copy and pastin', trial and errorin'{' '}
                <FullActiveLink
                  activeBackground='#6dffa8'
                  active={textIndex === 0}
                  href='https://github.com/grabbeh'
                >
                  coder
                </FullActiveLink>
                . See some of my{' '}
                <FullActiveLink
                  activeBackground='#96ccff'
                  active={textIndex === 1}
                  href='/'
                >
                  projects
                </FullActiveLink>
                . Jack of all trades{' '}
                <FullActiveLink
                  activeBackground='#FCEEAC'
                  active={textIndex === 2}
                  href='https://linkedin.com/in/mgoulbourn'
                >
                  lawyer
                </FullActiveLink>{' '}
                for Zopa, interested in fintech, data protection and contracts.
              </NormalText>
            </Container>
            <Flex sx={{ justifyContent: 'center' }}>
              <Box
                sx={{
                  height: '100vh',
                  width: ['100%', '300px'],
                  position: 'relative',
                  my: 4
                }}
              >
                <ActivePhoto active={textIndex === 0}>
                  <Image src='/norway.jpeg' />
                </ActivePhoto>
                <ActivePhoto active={textIndex === 1}>
                  <Image src='/beach.jpg' />
                </ActivePhoto>
                <ActivePhoto active={textIndex === 2}>
                  <Image src='/cabin.jpg' />
                </ActivePhoto>
              </Box>
            </Flex>
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
      fontSize: [3, 5],
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
      fontSize: [3, 5],
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
  transition: opacity 0.5s ease-in;
  ${props =>
    props.active &&
    css`
      opacity: 1;
    `}
`

export default NewYorkTimes
