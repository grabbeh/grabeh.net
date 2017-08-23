import React from 'react'
import BodyContainer from './BodyContainer'
import Title from './Title'
import Body from './Body'

export default ({ title, body }) => {
  let i = title.search('.md')
  let cleanTitle = title.slice(0, i).replace(/-/gi, ' ')
  return (
    <div>
      <Title title={cleanTitle} />
      <BodyContainer>
        <Body body={body} />
      </BodyContainer>
    </div>
  )
}
