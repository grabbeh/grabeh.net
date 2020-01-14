import useLocalStorage from './useLocalStorage'
import React, { useState } from 'react'
import Text from './Text'
import Box from './Box'
import Flex from './Flex'
import colors from '../components/Colors'
import hexRgb from 'hex-rgb'
import _ from 'lodash'
import { FaPlay } from 'react-icons/fa'
import { FaStop } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { MdSave } from 'react-icons/md'
import Toast from '../components/Toast'
import ToastSlide from '../components/Slide'

const Header = () => {
  const [backgroundColor, setBackgroundColor] = useLocalStorage(
    'background-color',
    '#FFFFFF'
  )
  const [textColor, setTextColor] = useLocalStorage('text-color', '#000000')
  const [job, storeJob] = useState(null)
  const [cycling, setCycling] = useState(false)
  const [activeNotification, setActiveNotification] = useState(false)
  const [notification, setNotification] = useState(null)

  console.log(backgroundColor)

  const changeColors = color => {
    if (color !== backgroundColor) {
      setBackgroundColor(color)
      setTextColor(getTextColor(color))
    }
  }

  const remove = () => {
    setActiveNotification(false)
  }

  const stop = () => {
    clearInterval(job)
    setCycling(false)
  }

  const cycle = () => {
    let counter = 0
    if (!cycling) {
      let job = setInterval(() => {
        if (counter < hexValues.length && !cycling) {
          let color = hexValues[counter]
          setBackgroundColor(color)
          setTextColor(getTextColor(color))
          counter++
          storeJob(job)
        } else {
          counter = 0
        }
      }, 500)
      setCycling(true)
    }
  }

  const trash = async () => {
    await window.localStorage.setItem(
      'background-color',
      JSON.stringify('#FFFFFF')
    )
    setBackgroundColor('#FFFFFF')
    setTextColor('#000000')
    setActiveNotification(true)
    setNotification('Preference deleted ¬_¬')
  }

  const save = async () => {
    const saved = JSON.parse(window.localStorage.getItem('background-color'))
    if (saved !== backgroundColor) {
      await window.localStorage.setItem(
        'background-color',
        JSON.stringify(backgroundColor)
      )
      setActiveNotification(true)
      setNotification('Preference saved!')
    }
  }

  let hexValues = _.values(colors)
  return (
    <Box>
      <ToastSlide active={activeNotification}>
        <Toast remove={remove} message={notification} />
      </ToastSlide>
      <Flex justifyContent='center' flexWrap='wrap'>
        {hexValues.map((color, i) => {
          return (
            <Box
              onClick={() => {
                changeColors(color)
              }}
              fontSize={5}
              height={20}
              width={[0.2, 0.04]}
              key={i}
              bg={color}
            />
          )
        })}
        <Box ml={3} onClick={cycle} height={20}>
          <Text color={textColor}>
            <FaPlay />
          </Text>
        </Box>
        <Box ml={3} onClick={stop} height={20}>
          <Text color={textColor}>
            <FaStop />
          </Text>
        </Box>
        <Box ml={3} onClick={save} height={20}>
          <Text color={textColor}>
            <MdSave />
          </Text>
        </Box>
        <Box ml={3} onClick={trash} height={20}>
          <Text color={textColor}>
            <FaTrash />
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

const getTextColor = hex => {
  let rgb = hexRgb(hex, { format: 'array' })
  let a = 1 - (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255
  let textColor = a < 0.5 ? 'black' : 'white'
  return textColor
}

export default Header
