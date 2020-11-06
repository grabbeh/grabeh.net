/** @jsx jsx */
import { jsx, Flex, Text, Container, Link } from 'theme-ui'
import useTimeout from 'use-timeout'
import { useState } from 'react'
import Layout from '../components/Layout'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

const NewYorkTimes = () => {
  const [show, setShow] = useState(false)
  useTimeout(() => setShow(true), 1000)
  return (
    <Layout>
      <Container>
        <Flex sx={{ justifyContent: 'center' }}>
            <Container sx={{ mt:5 }}>
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
                      {' '}lawyer
                     
                    </Link>
                  </RoughNotation>{' '}
                  <span role='img' aria-label='lawyer'>
                  {' '} 🕴{' '}
                      </span>
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
                      {' '}coding
                    </Link>
                  </RoughNotation>
                  <span role='img' aria-label='keyboard'>
                  {' '} ⌨️{' '}
                      </span>
                  . Take a look at some of my{' '}
                  <RoughNotation
                    animationDuration={1500}
                    color='#96ccff'
                    type='highlight'
                  >
                    <Link sx={{ textDecoration: 'none' }} href='/projects'>
                      {' '}projects
            
                    </Link>
                  </RoughNotation>
                  <span role='img' aria-label='construction in progress'>
                  {' '} 🚧{' '}
                      </span>
                  (apart from the ones in stealth mode).
                </NormalText>
              </RoughNotationGroup>
            </Container>
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
