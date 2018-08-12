import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const postTemplate = props => {
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className='mw7 f4 mt2 center pa3'>
        <div className='b bb-ft pb2 ttu'>{frontmatter.title}</div>
        <div className='fr'>{frontmatter.date}</div>
        <div className='cf' />
        <div className='lh-copy' dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`

export default postTemplate
