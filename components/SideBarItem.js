import React from 'react'
import Link from 'next/link'

export default ({ children, ...props }) => (
  <li className='pv1'>
    <Link prefetch href={props.url}>
      <a className='underline link black'>
        {children}
        {props.item}
      </a>
    </Link>
  </li>
)
