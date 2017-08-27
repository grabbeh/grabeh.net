import React from 'react'
import PostList from './PostList'
import Title from './Title'
import BodyContainer from './BodyContainer'

export default ({ titles }) => (
  <div>
    <Title title='Posts' />
    <BodyContainer>
      <PostList titles={titles} />
    </BodyContainer>
  </div>
)
