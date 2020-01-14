import React from 'react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({
  style,
  alt,
  children,
  imageData,
  backgroundColor
}) => {
  return (
    <BackgroundImage
      style={style}
      fluid={imageData}
      alt={alt}
      backgroundColor={backgroundColor}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
