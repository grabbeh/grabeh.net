import React from 'react'
import HomeSection from './HomeSection'

export default ({ projects }) => (
  <div className='mw8 center f4 pa3'>
    <div className='mb2 f3'>
      Hi, my name's Michael and I make Internet things:
    </div>
    <div className='flex flex-wrap'>
      {projects.map(project => {
        return (
          <div className='w-33-l w-50-ns w-100'>
            <HomeSection key={project.id} {...project} />
          </div>
        )
      })}
    </div>
    <div className='mt4'>
      I also wrote some stuff <a href='/posts'>here</a>
    </div>
  </div>
)
