import React, { useState, Children, cloneElement } from 'react'
import useInterval from '../hooks/useInterval'

const LinkLooper = props => {
  const [index, setIndex] = useState(0)
  const [totalLinks, setTotalLinks] = useState()

  useInterval(() => {
    let newIndex = index < totalLinks ? index + 1 : 0
    setIndex(newIndex)
  }, props.interval)

  //let total = Children.filter()
  Children.map(props.children, child => {
    console.log(child)
  })
  return (
    props.children && Children.map(props.children, child => cloneElement(child))
  )
}

export default LinkLooper
