import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Flex from '../components/Flex'
import Box from '../components/Box'
import Text from '../components/Text'
import hexRgb from 'hex-rgb'
import colors from '../components/Colors'
import _ from 'lodash'

const postTemplate = props => {
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark
  const { date, title } = frontmatter
  const [backgroundColor, setBackgroundColor] = useState('white')
  const [textColor, setTextColor] = useState('black')

  function changeColors (color) {
    setBackgroundColor(color)
    let text = getTextColor(color)
    setTextColor(text)
  }

  let hexValues = _.values(colors)

  return (
    <Layout>
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
                  width={[0.1, 0.05, 0.02]}
                  key={i}
                  bg={color}
                />
              )
            })}
          </Flex>
        </Box>
        <Flex justifyContent='center'>
          <Box mt={2} p={3} width={[1, 0.8, 0.6]} maxWidth={1200}>
            <Text color={textColor} fontSize={5} fontWeight='bold'>
              {title}
            </Text>
            {date && (
              <Flex justifyContent='flex-end'>
                <Box mt={2}>{date}</Box>
              </Flex>
            )}
            <Text
              color={textColor}
              lineHeight='1.5'
              fontSize={3}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`

export default postTemplate

const getTextColor = hex => {
  let rgb = hexRgb(hex, { format: 'array' })
  let a = 1 - (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255
  let textColor = a < 0.5 ? 'black' : 'white'
  return textColor
}
