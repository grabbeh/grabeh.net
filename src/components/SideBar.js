import React, { forwardRef } from 'react'
import posed from 'react-pose'
import BasicBox from './Box'

const Box = forwardRef((props, ref) => (
  <div ref={ref}>
    <BasicBox>{props.children}</BasicBox>
  </div>
))

const Slide = posed(Box)({
  show: {
    opacity: 1,
    y: 0
  },
  hide: {
    opacity: 0,
    y: -1000
  }
})

Slide.displayName = 'Slide'

const SlideBox = ({ active, children }) => {
  return <Slide pose={active ? 'show' : 'hide'}>{children}</Slide>
}

export default SlideBox
