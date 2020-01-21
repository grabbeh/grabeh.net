import React from 'react'
import styled from '@emotion/styled'

const LoadAnimation = ({ children, load }) => {
  return <AnimatedBox load={load}>{children}</AnimatedBox>
}

export default LoadAnimation

const AnimatedBox = styled('div')`
  overflow: hidden;
  transform: translateY(${props => (props.load ? '0px' : '100px')});
  opacity: ${props => (props.load ? 1 : 0)};
  transition: all 1s ease;
`
