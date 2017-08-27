import React from 'react'
import BodyContainer from './BodyContainer'
import Title from './Title'
import Render from '../lib/render'

export default ({ title, text }) => {
  const Body = Render(text)
  let cleanTitle = title.slice(0, title.search('.md')).replace(/-/gi, ' ')
  return (
    <div>
      <Title title={cleanTitle} />
      <BodyContainer>
        <Body />
      </BodyContainer>
    </div>
  )
}
