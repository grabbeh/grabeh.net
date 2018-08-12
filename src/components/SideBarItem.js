import React from 'react'
import { Link } from 'gatsby'

const SideBarItem = ({ children, url, item }) => (
  <div className='pointer fl mt3 mt0-ns mr4'>
    <Link className='dim dark-gray' to={url}>
      {children}
      {item}
    </Link>
  </div>
)

export default SideBarItem
