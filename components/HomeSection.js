import React from 'react'
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
    <Image mt={2} src={imageUrl} />
    <Link href={sourceUrl} children='Source' />
    <div>Tools</div>
    {tools.map(t => <Tool>{t}</Tool>)}
    <ClearFix />
  </div>
)
