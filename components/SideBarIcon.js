import React from 'react'
import cn from 'classnames'

const SideBarIcon = ({ github, twitter, className, ...props}) =>
<i className={
  cn("mr2, 
      fa, 
      twitter && fa-twitter, 
      github && fa-github,
      className 
  )}
  {...props}>{props.title}
 </>
  

