import React from 'react'
import Link from 'next/link'

export default ({ children, url, item }) => (
  <div className='fl br3 mt3 mt0-ns bg-light-yellow mr3 ph3 pv2'>
    <Link href={url}>
      <a className='underline-hover link black'>
        {children}
        {item}
      </a>
    </Link>
  </div>
)
