import React from 'react'
import MarkdownText from '../general/MarkdownText'
import { Box } from '../general'
import Text from './Text'

const Subtitle = props => {
  const { html, color } = props
  return (
    <Box>
      {html ? (
        <MarkdownText
          {...props}
          fontSize={[3, 4]}
          lineHeight={['text', 'subtitle']}
          fontWeight='subtitle'
          color={color || 'grey'}
          html={html}
        />
      ) : (
        <Text.h3
          {...props}
          fontSize={[3, 4]}
          lineHeight={['text', 'subtitle']}
          fontWeight='subtitle'
          color={color || 'grey'}
        >
          {props.text || props.children}
        </Text.h3>
      )}
    </Box>
  )
}

export default Subtitle
