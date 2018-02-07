import React from 'react'
import Link from 'next/link'

export default ({ children, url, item }) => (
  <li className='pv1'>
    <Link href={url}>
      <a className='underline link black'>
        {children}
        {item}
      </a>
    </Link>
  </li>
)
