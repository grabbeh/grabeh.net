import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const postTemplate = props => {
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark
  const { date, title } = frontmatter
  return (
    <Layout>
      <div className='mw7 f4 mt2 center pa3'>
        <div className='b pb2 ttu'>{title}</div>
        {date && <div className='mt2 fr'>{date}</div>}
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
