import styled from 'tachyons-components'

const HomeSection = styled('div')`mt3 mb4
${props => (props.nb ? '' : 'bt')}
`
export default HomeSection
