import styled from 'tachyons-components'

const Tool = styled('div')`
mt2 fl ba pa2
${props => (props.last ? 'mr0' : 'mr2')}
`

export default Tool
