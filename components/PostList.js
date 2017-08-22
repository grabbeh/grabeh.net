import React from 'react'
import Link from 'next/link'

export default ({ titles }) => {
  const fullUrls = titles.map(t => {
    let i = t.search('.md')
    let cleanTitle = t.slice(0, i).replace(/-/gi, ' ')
    return (
      <li className='lh-copy pv3 bb bl-0 bt-0 br-0 b--black-30'>
        <Link href={{ pathname: '/post', query: { title: t } }}>
          <a className='f4 db black'>{cleanTitle}</a>
        </Link>
      </li>
    )
  })
  return <ul className='list'>{fullUrls}</ul>
}
