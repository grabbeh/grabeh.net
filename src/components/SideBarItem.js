import React from 'react'
import Link from 'gatsby-link'

export default ({ children, url, item }) => (
  <div className='pointer fl br3 mt3 mt0-ns bg-light-yellow mr3 ph3 pv2'>
    <Link className='underline-hover link dark-gray' to={url}>
      {children}
      {item}
    </Link>
  </div>
)
