import React from 'react'
import LazyLoad from 'react-lazyload'
import Tool from './Tool'
import ClearFix from './ClearFix'

const HomeSection = ({ project, toggle }) => (
  <div>
    <div className='b mb2 f3 ttl'>{project.projectName}</div>
    <div className='dark-gray lh-copy'>
      {project.description}
    </div>
    <div className='mv2'>
      <div
        className='underline pointer dark-gray dim'
        onClick={() => toggle(project)}
      >
        More
      </div>
    </div>
    <div>
      <LazyLoad height={200}>
        <img alt='' onClick={() => toggle(project)} src={project.imageUrl} />
      </LazyLoad>
    </div>

    {project.siteUrl &&
      <div className='pt2'>
        <a className='dim dark-gray' href={project.siteUrl}>
          Site
        </a>
      </div>}
    <div className='pt2'>
      <a className='dim dark-gray' href={project.sourceUrl} children='Source'>
        Source
      </a>
    </div>
    <div className='b pt2'>Tools</div>
    {project.tools.map(t => <Tool key={t.id}>{t.tool}</Tool>)}
    <ClearFix />
  </div>
)

export default HomeSection
