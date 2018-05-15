import styled from 'styled-components'
import { Component, Fragment } from 'react'

class SidePage extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log(this.props)
  }
  render () {
    let { project: { imageUrl, projectName } } = this.props
    return (
      <MenuAnimation showSidePage={this.props.showSidePage}>

        {this.props.project &&
          <Fragment>
            <div onClick={this.props.toggle}>
              <i className='fr pb2 fa fa-times fa-lg' />
            </div>
            <div className='b mb2 font f3'>{projectName}</div>
            <img src={imageUrl} />
          </Fragment>}

      </MenuAnimation>
    )
  }
}

export default SidePage

const MenuAnimation = styled.div.attrs({
   className: '.overflow-y-scroll h100 height bg-white pa3 w-50 front fixed'
})`
transform: translateX(${props => (props.showSidePage ? '0px' : '-100%')});
transition: transform .5s ease-in;
`
