/** @jsx jsx */
import { jsx, Grid, Flex, Text, Container, Image, Link } from 'theme-ui'
import { css } from '@emotion/core'
import useTimeout from 'use-timeout'
import { useState } from 'react'
import Layout from '../components/Layout'
import Animation from '../components/animations/ScrollAnimation'
import styled from '@emotion/styled'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

const NewYorkTimes = () => {
  const [show, setShow] = useState(false)

  useTimeout(() => setShow(true), 1000)
  /*
  useInterval(() => {
    let index = textIndex < totalMessages ? textIndex + 1 : 0
    setTextIndex(index)
  }, 3000)*/

  return (
    <Layout>
      <Container>
        <Flex sx={{ justifyContent: 'center' }}>
          <Animation>
            <Container sx={{ my: [2, 4] }}>
              <RoughNotationGroup show={show}>
                <NormalText>
                  <span aria-label='wave' role='img'>
                    🌊
                  </span>{' '}
                  Hi, I'm Michael Goulbourn. My day job is as a{' '}
                  <RoughNotation
                    animationDuration={1500}
                    type='highlight'
                    color='#FCEEAC'
                  >
                    <Link
                      sx={{ textDecoration: 'none' }}
                      href='https://linkedin.com/in/mgoulbourn'
                    >
                      lawyer{' '}
                      <span role='img' aria-label='lawyer'>
                        🕴
                      </span>
                    </Link>
                  </RoughNotation>{' '}
                  for Zopa. In my spare time, I like{' '}
                  <RoughNotation
                    animationDuration={1500}
                    type='highlight'
                    color='#6dffa8'
                  >
                    <Link
                      sx={{ textDecoration: 'none' }}
                      href='https://github.com/grabbeh'
                    >
                      coding{' '}
                      <span role='img' aria-label='keyboard'>
                        ⌨️
                      </span>
                    </Link>
                  </RoughNotation>
                  . Take a look at some of my{' '}
                  <RoughNotation
                    animationDuration={1500}
                    color='#96ccff'
                    type='highlight'
                  >
                    <Link sx={{ textDecoration: 'none' }} href='/projects'>
                      {' '}
                      projects{' '}
                      <span role='img' aria-label='construction in progress'>
                        🚧
                      </span>
                    </Link>
                  </RoughNotation>{' '}
                  (apart from the ones in stealth mode).
                </NormalText>
              </RoughNotationGroup>
            </Container>
  /*
            <Container>
              <Flex sx={{ justifyContent: 'center' }}>
                <Grid gap={[3, 4]} columns={[1, 3]}>
                  <Image src='/norway.jpeg' />

                  <Image src='/cabin.jpg' />

                  <Image src='/beach.jpg' />
                </Grid>
              </Flex>
            </Container>*/
          </Animation>
        </Flex>
      </Container>
    </Layout>
  )
}

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

export default NewYorkTimes
