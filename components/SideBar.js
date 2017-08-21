import React from 'react'

export default () => (
  <div className='mb3 mt0-l mt3 pl4-l fl w-30-l w-100'>
    <div className='bg-white f4 pa3 shadow-5'>
      <ul className='pa0 ma0 list'>
        <li className='pv1'>
          <a
            className='underline link black'
            href='https://twitter.com/grabbeh'
          >
            <i className='mr2 fa fa-twitter ' aria-hidden='true' />Twitter
          </a>
        </li>
        <li className='pv1'>
          <a
            className='underline  link black '
            href='https://github.com/grabbeh'
          >
            <i className='mr2 fa fa-github' aria-hidden='true' />GitHub
          </a>
        </li>
        <li className='pv1'>
          <a
            className='underline  link black '
            href='/posts'
          >
            <i className='mr2 fa fa-github' aria-hidden='true' />Writings
          </a>
        </li>
      </ul>
    </div>
  </div>
)
