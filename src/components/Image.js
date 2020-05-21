import styled from '@emotion/styled'
import theme from './theme'

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
`

Image.displayName = 'Image'

Image.defaultProps = {
  theme: theme
}

export default Image
