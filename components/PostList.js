import React from 'react'
import Link from 'next/link'

export default ({ titles }) => {
  const fullUrls = titles.map(t => {
    let title = t.title
    let i = title.search('.md')
    let cleanTitle = title.slice(0, i).replace(/-/gi, ' ')
    return (
      <li key={t.id} className='lh-copy pb2 bl-0 bt-0 br-0'>
        <Link prefetch href={{ pathname: '/post', query: { title: title } }}>
          <a className='f4 db'>{cleanTitle}</a>
        </Link>
      </li>
    )
  })
  return <ul className='list ma0 pa0'>{fullUrls}</ul>
}
