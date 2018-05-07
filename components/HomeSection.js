import React from 'react'
import LazyLoad from 'react-lazyload'
import { Image, Text, Link } from 'rebass'
import Tool from './Tool'
import ClearFix from './ClearFix'

export default ({
  projectName,
  description,
  imageUrl,
  sourceUrl,
  siteUrl,
  tools
}) => (
  <div className='mr5-ns bt b--black-30 bw1 pb3'>
    <div className='b pv2 font f3 ttl'>{projectName}</div>
    <Text className='lh-copy' children={description} />
    <LazyLoad height={200}>
      <Image className='mb2' mt={2} src={imageUrl} />
    </LazyLoad>
    {siteUrl &&
      <div className='pv2'><Link href={siteUrl} children='Site' /></div>}
    <Link className='pv2' href={sourceUrl} children='Source' />
    <div className='pt2'>Tools</div>
    {tools.map(t => <Tool key={t.id}>{t.tool}</Tool>)}
    <ClearFix />
  </div>
)
