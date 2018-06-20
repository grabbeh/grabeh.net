import React from 'react'

export default class extends React.Component {
  render () {
    const { markdownRemark } = this.props.data
    const { frontmatter, html } = markdownRemark

    return (
      <div className='mw7 f4 mt2 center pa3'>
        <div className='b font ttu'>{frontmatter.title}</div>
        <div className='fr'>{frontmatter.date}</div>
        <div className='cf' />
        <div className='lh-copy' dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query CreativeByPath($path: String!) {
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
