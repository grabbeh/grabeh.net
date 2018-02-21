import React from 'react'
import HomeSection from './HomeSection'

export default ({ projects }) => (
  <div className='f4-ns f5 w-100 pv3 lh-copy'>
    <div>I make Internet things:</div>
    <div>
      {projects.map(project => {
        return <HomeSection key={project.id} {...project} />
      })}
    </div>
    <div className='mt4'>
      I also wrote some stuff <a href='/posts'>here</a>
    </div>
  </div>
)
