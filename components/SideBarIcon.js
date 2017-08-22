import React from 'react'
import cn from 'classnames'

export default ({ github, twitter, pencil }) => (
  <i
    className={cn(
      'mr2',
      'fa',
      twitter && 'fa-twitter',
      github && 'fa-github',
      pencil && 'fa-pencil'
    )}
  />
)
