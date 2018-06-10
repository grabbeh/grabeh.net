import React from 'react'
import SideBarContainer from './SideBarContainer'
import List from './List'
import SideBarItem from './SideBarItem'
import SideBarIcon from './SideBarIcon'

export default () => (
  <SideBarContainer>
    <List>
      <a
        href='https://github.com/grabbeh'
        className='underline-hover link dark-gray'
      >
        <SideBarIcon github />
      </a>
      <SideBarItem item='Writings' url='/posts'>
        <SideBarIcon pencil />
      </SideBarItem>
    </List>
  </SideBarContainer>
)
