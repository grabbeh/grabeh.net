import React from 'react'
import MarkdownText from '../general/MarkdownText'

const BodyText = ({ html, color }) => (
  <MarkdownText fontSize={1} lineHeight='text' color={color} html={html} />
)

export default BodyText
