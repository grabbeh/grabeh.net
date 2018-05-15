import React from 'react'
import LazyLoad from 'react-lazyload'
import { Image, Text, Link } from 'rebass'
import Tool from './Tool'
import ClearFix from './ClearFix'

export default ({ project, toggle }) => (
  <div className='mr5-ns bt b--black-30 bw1 pb3'>
    <div className='b pv2 font f3 ttl'>{project.projectName}</div>
    <Text className='lh-copy' children={project.description} />
    <div className='mt2'>
      <Link
        className='underline pointer dark-blue'
        onClick={() => toggle(project)}
      >
        More
      </Link>
    </div>
    <LazyLoad height={200}>
      <Image
        onClick={() => toggle(project)}
        className='mb2'
        mt={2}
        src={project.imageUrl}
      />
    </LazyLoad>
    {project.siteUrl &&
      <div className='pv2'>
        <Link href={project.siteUrl} children='Site' />
      </div>}
    <Link className='pv2' href={project.sourceUrl} children='Source' />
    <div className='pt2'>Tools</div>
    {project.tools.map(t => <Tool key={t.id}>{t.tool}</Tool>)}
    <ClearFix />
  </div>
)
