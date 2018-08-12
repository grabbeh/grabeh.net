import React from 'react'
import Home from '../components/Home'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const Index = ({ data: { allProjectsJson: { edges } } }) => (
  <Layout>
    <Home projects={edges} />
  </Layout>
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
