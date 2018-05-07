import React from 'react'
import SideBarContainer from './SideBarContainer'
import List from './List'
import SideBarItem from './SideBarItem'
import SideBarIcon from './SideBarIcon'

export default () => (
  <SideBarContainer>
    <List>
      <SideBarItem item='Github' url='https://github.com/grabbeh'>
        <SideBarIcon github />
      </SideBarItem>
      <SideBarItem item='Writings' url='/posts'>
        <SideBarIcon pencil />
      </SideBarItem>
    </List>
  </SideBarContainer>
)
