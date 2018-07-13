import SideBarItem from './SideBarItem'
import ClearFix from './ClearFix'
import React, { Fragment } from 'react'
import FaGit from 'react-icons/lib/fa/github'
import FaHome from 'react-icons/lib/fa/home'
import FaPencil from 'react-icons/lib/fa/pencil'

const Header = () => (
  <Fragment>
    <div className='mt3 ml3 fr f4'>
      <SideBarItem item='Home' url='/'>
        <FaHome style={{ marginRight: '10px' }} size={20} />
      </SideBarItem>
      <div className='pointer fl mt3 mt0-ns mr4'>
        <a
          href='https://github.com/grabbeh'
          className='underline-hover link dark-gray'
        >
          <FaGit style={{ marginRight: '10px' }} size={20} />
          Github
        </a>
      </div>
      <SideBarItem item='Writings' url='/posts'>
        <FaPencil style={{ marginRight: '10px' }} size={20} />
      </SideBarItem>
    </div>
    <ClearFix />
  </Fragment>
)

export default Header
