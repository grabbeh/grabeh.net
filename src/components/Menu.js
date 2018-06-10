import React from 'react'
import Grow from './Grow'
import Link from 'gatsby-link'

const Menu = ({ showMenu, close }) => {
  return (
    <Grow show={showMenu}>
      <div onClick={close} className='pa3'>
        <i className='pointer fr fa fa-times dark-gray mt2 fa-lg' />
      </div>
      <div className='f3 mt5 tc'>
        <div onClick={close}>
          <Link
            className='tracked hover-black dark-gray lato ttu link'
            to='/about'
          >
            About
          </Link>
        </div>
        <div className='mt3' onClick={close}>
          <Link className='tracked hover-black dark-gray lato ttu link' to='/'>
            Work
          </Link>
        </div>
      </div>

    </Grow>
  )
}

export default Menu
