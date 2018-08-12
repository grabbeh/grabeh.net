import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

const PostList = ({ data: { allPostsJson: { edges } } }) => (
  <Layout>
    <div className='center mw7'>
      <ul className='ma0 pa3 list'>
        {edges.map(({ node }) => (
          <li key={node.path} className='f4 pv2'>
            <Link className='dark-gray dim' to={node.path}>
              {node.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export const query = graphql`
query  {
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
