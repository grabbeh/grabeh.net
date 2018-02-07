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
  <div className='mt3 mb3 bb pb4'>
    <div className='b'>{projectName}</div>
    <Text children={description} />
    <LazyLoad height={200}>
      <Image mt={2} src={imageUrl} />
    </LazyLoad>
    {siteUrl && <div><Link href={siteUrl} children='Site' /></div>}
    <Link href={sourceUrl} children='Source' />
    <div>Tools</div>
    {tools.map(t => <Tool key={t.id}>{t.tool}</Tool>)}
    <ClearFix />
  </div>
)
