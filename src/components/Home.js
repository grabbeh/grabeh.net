import HomeSection from './HomeSection'
import React, { Component, Fragment } from 'react'
import SidePage from './SidePage'
import cn from 'classnames'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showSidePage: false,
      project: false
    }
  }

  toggle = project => {
    if (!this.state.showSidePage) {
      this.setState({
        project,
        showSidePage: true
      })
    } else {
      this.setState({
        showSidePage: false
      })
    }
  }

  render () {
    let { projects } = this.props
    let { showSidePage, project } = this.state
    let { toggle } = this

    return (
      <Fragment>
        <SidePage
          toggle={this.toggle}
          project={project}
          showSidePage={showSidePage}
        />
        <div className='mw8 center f4 pa3'>
          <div className='mb4 mt3 font f3'>
            <p>
              Hi, my name's Michael. I work as an in-house lawyer in London. However in my spare time I make Internet things.
            </p>
            <p>
              In part I'm inspired by the interface between the law and programming but also in part because I just enjoy learning new technologies.
            </p>
            <p> Here's some of my work:</p>
          </div>
          <div className='flex flex-wrap'>
            {projects.map(project => {
              return (
                <div key={project.id} className='w-33-l w-50-ns w-100'>
                  <HomeSection
                    toggle={toggle}
                    key={project.id}
                    project={project}
                  />
                </div>
              )
            })}
          </div>
          <div className='mt4'>
            I also wrote some stuff <a href='/posts'>here</a>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Home
