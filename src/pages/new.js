/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { Box, Flex, Text, Container } from 'theme-ui'
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
      <Container sx={{ height: '100vh', bg: 'white' }}>
        <Flex sx={{ justifyContent: 'center' }}>
          <Container sx={{ pt: 6, width: '700px' }}>
            <Flex>
              <Box sx={{ flex: '0 1 auto' }}>
                <Text sx={{ fontSize: 5, fontFamily: 'serif' }} as='span'>
                  Michael Goulbourn.
                </Text>
                <ActiveText color='#6dffa8' active={textIndex === 0}>
                  Lover.
                </ActiveText>
                <ActiveText color=' #96ccff' active={textIndex === 1}>
                  Fighter.
                </ActiveText>
                <ActiveText color='#FCEEAC' active={textIndex === 2}>
                  Lawyer.
                </ActiveText>
              </Box>
            </Flex>
          </Container>
        </Flex>
      </Container>
    </Layout>
  )
}

const ActiveText = styled.span`
  margin-left: 10px;
  font-family: Domine;
  font-size: 30px;
  font-weight: bold;
  background-color: white;
  padding: 5px;
  transition: background-color 0.5s ease-in-out;
  ${props =>
    props.active &&
    css`
      background-color: ${props.color};
    `}
`

const ActivePhoto = styled.div`
  opacity: 0;
  display: none;
  transition: opacity 0.5s ease-in-out;
  ${props =>
    props.active &&
    css`
      opacity: 1;
      display: block;
    `}
`

export default NewYorkTimes
/*
<Box sx={{ flex: '1 0 auto' }}>
<ActivePhoto active={textIndex === 0}>
  <Image sx={{ width: '300px' }} src='/norway.jpeg' />
</ActivePhoto>
<ActivePhoto active={textIndex === 1}>
  <Image sx={{ width: '300px' }} src='/cabin.jpg' />
</ActivePhoto>
<ActivePhoto active={textIndex === 2}>
  <Image sx={{ width: '300px' }} src='/beach.jpg' />
</ActivePhoto>
</Box>*/
