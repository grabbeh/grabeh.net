import React, { forwardRef } from 'react'
import posed from 'react-pose'
import BasicBox from './Box'


const Box = forwardRef((props, ref) => (
    <div ref={ref}>
      <BasicBox />
    </div>
  ))


const TweenBox = posed(Box)({
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
    delay: 500
  },
  hide: {
    opacity: 0,
    y: -200
  }
})

TweenBox.displayName = 'TweenBox'

const AnimatedBox = ({ active, children }) => {
  return (
    <TweenBox active={active} pose={active ? 'show' : 'hide'}>
      {children}
    </TweenBox>
  )
}

export default AnimatedBox
