import React from 'react'
import Home from '../components/Home'

const Index = ({ data: { site: { siteMetadata: { projects } } } }) => {
  return <Home projects={projects} />
}

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        projects {
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
