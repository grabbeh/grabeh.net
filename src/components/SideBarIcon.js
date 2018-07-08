import React from 'react'
import cn from 'classnames'

const SideBarIcon = ({ github, twitter, pencil, home }) => (
  <i
    className={cn(
      'fl',
      'mr2',
      'fa',
      'fa-l',
      twitter && 'fa-twitter',
      github && 'fa-github',
      pencil && 'fa-pencil',
      home && 'fa-home'
    )}
  />
)

export default SideBarIcon
