import React from 'react'
import Home from '../components/Home'

const Index = ({ data: { allProjectsJson: { edges } } }) => (
  <Home projects={edges} />
)

export const query = graphql`
  query projectsQuery {
    allProjectsJson {
      edges {
        node {
          projectName
          description
          imageUrl
          sourceUrl
          siteUrl
          longDescription
          tools {
            tool
            id
          }
          id
        }
      } 
    }
  }
`

export default Index
