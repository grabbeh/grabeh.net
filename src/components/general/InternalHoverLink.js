import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const InternalHoverLink = styled(props => <Link {...props} />)`
  cursor: pointer;
  text-decoration: none;
  color: #4a4a4a;
  &:hover {
    color: #00a880;
    border-bottom: 2px #00a880 solid;
  }
`

export default InternalHoverLink
