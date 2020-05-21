/** @jsx jsx */
import { jsx, Box, Flex, Text, Container, Image } from 'theme-ui'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Animation from '../components/animations/ScrollAnimation'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

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
      <Container sx={{ px: 3 }}>
        <Flex sx={{ justifyContent: 'center' }}>
          <Animation>
            <Container sx={{ pt: 6 }}>
              <Flex sx={{ flexWrap: 'wrap' }}>
                <Box sx={{ pr: 2, py: 1 }}>
                  <Text
                    sx={{
                      fontSize: 5,
                      fontFamily: 'serif',
                      lineHeight: '1.5em'
                    }}
                  >
                    Michael Goulbourn.
                  </Text>
                </Box>
                <Box>
                  <FullActiveText
                    activeBackground='#6dffa8'
                    active={textIndex === 0}
                  >
                    Lover.
                  </FullActiveText>
                </Box>
                <Box>
                  <FullActiveText
                    activeBackground='#96ccff'
                    active={textIndex === 1}
                    sx={{ ml: 2 }}
                  >
                    Fighter.
                  </FullActiveText>
                </Box>
                <Box>
                  <FullActiveText
                    activeBackground='#FCEEAC'
                    active={textIndex === 2}
                  >
                    Lawyer.
                  </FullActiveText>
                </Box>
              </Flex>
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

const ActiveText = styled(Text)`
  transition: background-color 0.5s ease-in-out;
  ${props =>
    props.active &&
    css`
      background-color: ${props.activeBackground};
    `}
`

const FullActiveText = props => (
  <ActiveText
    sx={{
      fontFamily: 'serif',
      fontSize: 5,
      fontWeight: 'bold',
      bg: 'white',
      lineHeight: '1.5em',
      px: [0, 2],
      py: 1
    }}
    {...props}
  >
    {props.children}
  </ActiveText>
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
