import React, { Component, Fragment } from 'react'

class SidePage extends Component {
  render () {
    let { project, toggle } = this.props
    return (
      <Fragment>
        {project &&
          <div>
            <div onClick={toggle}>
              <i className='pointer fr pb2 fa fa-times fa-lg' />
            </div>
            <div className='ttl b bb bw1 b--black-30 pb2 mb3 font f3'>
              {project.projectName}
            </div>
            <img src={project.imageUrl} />
            <div className='pt2 pb4 f4 lh-copy'>{project.longDescription}</div>
          </div>}
      </Fragment>
    )
  }
}

export default SidePage
