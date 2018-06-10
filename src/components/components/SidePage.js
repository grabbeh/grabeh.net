import styled from 'styled-components'
import { Component, Fragment } from 'react'

class SidePage extends Component {
  render () {
    let { project: { imageUrl, projectName, longDescription } } = this.props
    return (
      <MenuAnimation showSidePage={this.props.showSidePage}>
        {this.props.project &&
          <Fragment>
            <div onClick={this.props.toggle}>
              <i className='fr pb2 fa fa-times fa-lg' />
            </div>
            <div className='b bb bw1 b--black-30 pb2 mb3 font f3'>
              {projectName.toLowerCase()}
            </div>
            <img src={imageUrl} />
            <div className='pt2 pb4 f4 lh-copy'>{longDescription}</div>
          </Fragment>}
      </MenuAnimation>
    )
  }
}

export default SidePage

const MenuAnimation = styled.div.attrs({
  className: 'overflow-y-scroll h-100 height bg-white pa3 w-60-l w-80-ns w-100 front fixed'
})`
transform: translateX(${props => (props.showSidePage ? '0px' : '-100%')});
transition: transform .5s ease-in;
`
