import React from 'react'
import MarkdownSpan from '../general/MarkdownSpan'

const BodySpan = ({ html, color }) => (
  <MarkdownSpan fontSize={[2, 3]} lineHeight='text' color={color} html={html} />
)

export default BodySpan
