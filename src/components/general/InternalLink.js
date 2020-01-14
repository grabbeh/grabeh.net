import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const InternalLink = styled(props => <Link {...props} />)`
  cursor: pointer;
  text-decoration: none;
  color: #4a4a4a;
`

export default InternalLink
