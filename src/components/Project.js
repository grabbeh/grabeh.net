import React from 'react'
import LazyLoad from 'react-lazyload'
import Link from 'gatsby-link'
import Tool from './Tool'
import ClearFix from './ClearFix'

const HomeSection = ({ project, toggle }) => (
  <div className='mr5-ns bt b--black-30 bw1 pb3'>
    <div className='b pv2 pt-serif f3 ttl'>{project.projectName}</div>
    <div className='lh-copy'>
      {project.description}
    </div>
    <div className='mt2'>
      <Link
        className='underline pointer dark-blue'
        onClick={() => toggle(project)}
      >
        More
      </Link>
    </div>
    <LazyLoad height={200}>
      <img
        onClick={() => toggle(project)}
        className='mb2'
        mt={2}
        src={project.imageUrl}
      />
    </LazyLoad>
    {project.siteUrl &&
      <div className='pv2'>
        <a href={project.siteUrl} >
          Site
        </a>
      </div>}
    <a className='pv2' href={project.sourceUrl} children='Source'>Source</a>
    <div className='pt2'>Tools</div>
    {project.tools.map(t => <Tool key={t.id}>{t.tool}</Tool>)}
    <ClearFix />
  </div>
)

export default HomeSection
