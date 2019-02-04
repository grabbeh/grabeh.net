import React, { forwardRef } from 'react'
import posed from 'react-pose'
import BasicBox from './Box'


const Box = forwardRef((props, ref) => {
    console.log(props)
    return (
    <div ref={ref}>
      <BasicBox {...props}/>
    </div>
  )})


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

const AnimatedBox = (props) => {
    console.log(props)
  return (
    <TweenBox active={props.active} pose={props.active ? 'show' : 'hide'}>
      {props.children}
    </TweenBox>
  )
}

export default AnimatedBox
