import SideBarIcon from './SideBarIcon'
import SideBarItem from './SideBarItem'
import ClearFix from './ClearFix'
import { Fragment } from 'react'

export default () => (
  <Fragment>
    <div className='mt3 ml3 fr f4'>
      <SideBarItem item='Home' url='/'>
        <SideBarIcon home />
      </SideBarItem>
      <SideBarItem item='Github' url='https://github.com/grabbeh'>
        <SideBarIcon github />
      </SideBarItem>
      <SideBarItem item='Writings' url='/posts'>
        <SideBarIcon pencil />
      </SideBarItem>
    </div>
    <ClearFix />
  </Fragment>
)
