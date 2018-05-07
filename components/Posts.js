import PostList from './PostList'
import Title from './Title'

export default ({ titles }) => (
  <div className='pa3'>
    <Title title='Posts' />
    <PostList titles={titles} />
  </div>
)
