import SideBarIcon from './SideBarIcon'
import SideBarItem from './SideBarItem'
import ClearFix from './ClearFix'
import React, { Fragment } from 'react'

export default () => (
  <Fragment>
    <div className='mt3 ml3 fr f4'>
      <SideBarItem item='Home' url='/'>
        <SideBarIcon home />
      </SideBarItem>
      <div className='pointer fl br3 mt3 mt0-ns bg-light-yellow mr3 ph3 pv2'>
        <a
          href='https://github.com/grabbeh'
          className='underline-hover link dark-gray'
        >
          <SideBarIcon github />
          Github
        </a>
      </div>

      <SideBarItem item='Writings' url='/posts'>
        <SideBarIcon pencil />
      </SideBarItem>
    </div>
    <ClearFix />
  </Fragment>
)
