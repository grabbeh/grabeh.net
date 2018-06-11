import React from 'react'
import Highlight from 'react-highlight'

export default class extends React.Component {
  render () {
    const { markdownRemark } = this.props.data
    const { frontmatter, html } = markdownRemark
    if (/<code>/.test(html)) {
      return (
        <div className='mw7 f4 mt2 center pa3'>
          <div className='b font ttl'>{frontmatter.title}</div>
          <div className='lh-copy'>
            <Highlight innerHTML>
              {html}
            </Highlight>
          </div>
        </div>
      )
    }
    return (
      <div className='mw7 f4 mt2 center pa3'>
        <div className='b ttu'>{frontmatter.title}</div>
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
      }
    }
  }
`
