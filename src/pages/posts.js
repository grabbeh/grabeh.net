import React from 'react'
import Link from 'gatsby-link'

const PostList = ({ data: { site: { siteMetadata: { posts } } } }) => (
  <div>
    <ul className='ma0 pa3 list'>
      {posts.map(p => (
        <li key={p.path} className='f4 pv2'>
          <Link to={p.path}>{p.title}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export const query = graphql`
  query postsQuery {
    site {
      siteMetadata {
        posts {
          title
          path
        }
      }
    }
  }
`

export default PostList
