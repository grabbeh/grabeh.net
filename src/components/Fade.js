import React, { forwardRef } from 'react'
import posed from 'react-pose'
import BasicBox from './Box'

const Box = forwardRef((props, ref) => (
  <div ref={ref}>
    <BasicBox>{props.children}</BasicBox>
  </div>
))

const TweenBox = posed(Box)({
  show: {
    opacity: 1
  },
  hide: {
    opacity: 0
  }
})

TweenBox.displayName = 'TweenBox'

const AnimatedBox = props => {
  console.log(props.active)
  return (
    <TweenBox pose={props.active ? 'show' : 'hide'}>{props.children}</TweenBox>
  )
}

export default AnimatedBox
