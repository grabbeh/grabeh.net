import React from 'react'
import Link from 'next/link'

export default ({ titles }) => {
  const fullUrls = titles.map(t => {
    let title = t.title
    let i = title.search('.md')
    let cleanTitle = title.slice(0, i).replace(/-/gi, ' ')
    return (
      <li key={t.id} className='lh-copy pv3 bb bl-0 bt-0 br-0 b--black-30'>
        <Link href={{ pathname: '/post', query: { title: title } }}>
          <a className='f4 db black'>{cleanTitle}</a>
        </Link>
      </li>
    )
  })
  return <ul className='list pa1'>{fullUrls}</ul>
}
