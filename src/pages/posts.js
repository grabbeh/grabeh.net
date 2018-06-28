import React from 'react'
import Link from 'gatsby-link'

const PostList = ({ data: { allPostsJson: { edges } } }) => (
  <div>
    <ul className='ma0 pa3 list'>
      {edges.map(({ node }) => (
        <li key={node.path} className='f4 pv2'>
          <Link to={node.path}>{node.title}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export const query = graphql`
query postsQuery {
  allPostsJson {
    edges {
      node {
          title
          path
        }
      }
    }
  }
`

export default PostList
