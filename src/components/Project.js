import React from 'react'
import LazyLoad from 'react-lazyload'
import Tool from './Tool'
import ClearFix from './ClearFix'

const HomeSection = ({ project, toggle }) => (
  <div className='mr5-ns bt b--black-30 bw1 pb3'>
    <div className='b pv2 pt-serif f3 ttl'>{project.projectName}</div>
    <div className='lh-copy'>
      {project.description}
    </div>
    <div className='mv2'>
      <div
        className='underline pointer dark-blue'
        onClick={() => toggle(project)}
      >
        More
      </div>
    </div>
    <div>
      <LazyLoad height={200}>
        <img
          className='img-shadow'
          onClick={() => toggle(project)}
          src={project.imageUrl}
        />
      </LazyLoad>
    </div>

    {project.siteUrl &&
      <div className='pv2'>
        <a href={project.siteUrl}>
          Site
        </a>
      </div>}
    <div className='pt2'>
      <a href={project.sourceUrl} children='Source'>Source</a>
    </div>
    <div className='pt2'>Tools</div>
    {project.tools.map(t => <Tool key={t.id}>{t.tool}</Tool>)}
    <ClearFix />
  </div>
)

export default HomeSection
