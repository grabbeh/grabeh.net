import React from 'react'
import marked from 'marked'

export default ({ body }) => {
  const html = marked(body || '')
  return (
    <div
      className='f4-ns f5 w-100 lh-copy'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
