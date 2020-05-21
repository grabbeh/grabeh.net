/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Animation from '../components/animations/ScrollAnimation'
import { Box, Flex, Text, Container, Image, Link } from 'theme-ui'
import styled, { css } from 'styled-components'

const NewYorkTimes = () => {
  const [textIndex, setTextIndex] = useState(0)
  const totalMessages = 3
  useEffect(() => {
    let timeout
    if (textIndex < totalMessages) {
      timeout = setTimeout(() => setTextIndex(textIndex + 1), 3000)
    } else {
      setTextIndex(0)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [textIndex])
  return (
    <Layout>
      <Container>
        <Flex sx={{ justifyContent: 'center' }}>
          <Animation>
            <Container sx={{ width: '600px' }}>
              <NormalText>
                Michael Goulbourn. Copy and pastin', trial and errorin'{' '}
                <FullActiveLink
                  activeBackground='#6dffa8'
                  active={textIndex === 0}
                  href='https://github.com/grabbeh'
                >
                  coder
                </FullActiveLink>{' '}
                with a number of dubious{' '}
                <FullActiveLink
                  activeBackground='#96ccff'
                  active={textIndex === 1}
                  href='/'
                >
                  projects
                </FullActiveLink>
                . Journeyman{' '}
                <FullActiveLink
                  activeBackground='#FCEEAC'
                  active={textIndex === 2}
                  href='https:/linkedin.com/in/mgoulbourn'
                >
                  lawyer
                </FullActiveLink>{' '}
                for Zopa.
              </NormalText>
            </Container>
            <Flex sx={{ justifyContent: 'center' }}>
              <Box sx={{ py: 4 }}>
                <ActivePhoto active={textIndex === 0}>
                  <Image sx={{ width: ['100%', '300px'] }} src='/norway.jpeg' />
                </ActivePhoto>
                <ActivePhoto active={textIndex === 1}>
                  <Image sx={{ width: ['100%', '300px'] }} src='/cabin.jpg' />
                </ActivePhoto>
                <ActivePhoto active={textIndex === 2}>
                  <Image sx={{ width: ['100%', '300px'] }} src='/beach.jpg' />
                </ActivePhoto>
              </Box>
            </Flex>
          </Animation>
        </Flex>
      </Container>
    </Layout>
  )
}

const ActiveLink = styled(Link)`
  transition: background-color 0.5s ease-in-out;
  &:hover & {
    text-decoration: underline;
  }
  ${props =>
    props.active &&
    css`
      background-color: ${props.activeBackground};
    `}
  ${props =>
    css`
      &:hover {
        background-color: ${props.activeBackground};
      }
    `}
`

const FullActiveLink = props => (
  <ActiveLink
    sx={{
      fontFamily: 'serif',
      fontSize: 5,
      fontWeight: 'bold',
      bg: 'white',
      lineHeight: '1.5em',
      py: 1,
      textDecoration: 'none'
    }}
    {...props}
  >
    {props.children}
  </ActiveLink>
)

const ActiveText = styled(Text)`
  transition: background-color 0.5s ease-in-out;
  :hover & {
    color: red;
  }
  ${props =>
    props.active &&
    css`
      background-color: ${props.activeBackground};
    `}
  ${props =>
    css`
      &:hover {
        background-color: ${props.activeBackground};
      }
    `}
`

const FullActiveText = props => (
  <ActiveText
    as='span'
    sx={{
      fontFamily: 'serif',
      fontSize: 5,
      fontWeight: 'bold',
      bg: 'white',
      lineHeight: '1.5em',
      py: 1
    }}
    {...props}
  >
    {props.children}
  </ActiveText>
)

const NormalText = props => (
  <Text
    as='p'
    sx={{
      fontFamily: 'serif',
      fontSize: 5,
      lineHeight: '1.5em',
      py: 1
    }}
  >
    {props.children}
  </Text>
)

const ActivePhoto = styled.div`
  opacity: 0;
  height: 0;
  transition: opacity 0.5s ease-in-out;
  ${props =>
    props.active &&
    css`
      opacity: 1;
      height: 100%;
    `}
`

export default NewYorkTimes
