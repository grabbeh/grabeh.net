import React from 'react'
import marked from 'marked'
import dynamic from 'next/dynamic'
const Highlight = dynamic(import('react-highlight'))

export default body => {
  return class extends React.Component {
    renderMarkdown () {
      const html = marked(body)
      if (/<code>/.test(html)) {
        return (
          <div>
            <Highlight innerHTML>
              {html}
            </Highlight>
          </div>
        )
      }
      return <div dangerouslySetInnerHTML={{ __html: html }} />
    }

    render () {
      return (
        <div className='f4-ns f5 w-100 lh-copy'>
          {this.renderMarkdown()}
        </div>
      )
    }
  }
}
