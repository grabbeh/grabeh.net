import React, { useState, useEffect } from 'react'
import hexRgb from 'hex-rgb'

function useColors (color) {
  const [backgroundColor, setBackgroundColor] = useState('white')
  const [textColor, setTextColor] = useState('black')

  function changeColors (color) {
    setBackgroundColor(color)
    let text = getTextColor(color)
    setTextColor(text)
  }
  useEffect(() => {
    return () => {
      changeColors(color)
    }
  })

  return { backgroundColor, textColor }
}

export default useColors

const getTextColor = hex => {
  let rgb = hexRgb(hex, { format: 'array' })
  let a = 1 - (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255
  let textColor = a < 0.5 ? 'black' : 'white'
  return textColor
}
