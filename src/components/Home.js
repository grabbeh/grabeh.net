import Project from './Project'
import React, { Component, Fragment } from 'react'
import SidePage from './SidePage'
import cn from 'classnames'
import styled from 'styled-components'
import { Link } from 'gatsby'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      project: false
    }
  }

  toggle = project => {
    if (!this.state.project) {
      this.setState({
        project
      })
    } else {
      this.setState({
        project: false
      })
    }
  }

  getStyle (mainColor, shadowColor) {
    let boxShadow = `10px 10px 0px 0px ${shadowColor}`
    console.log(boxShadow)
    return {
      backgroundColor: mainColor,
      boxShadow: boxShadow
    }
  }

  render () {
    let { projects } = this.props
    let { project } = this.state
    let { toggle } = this
    return (
      <Fragment>
        <MenuAnimation
          className={cn(
            project && 'ml0',
            !project && 'off-screen',
            'overflow-y-scroll',
            'h-100',
            'height',
            'bg-white',
            'pa3',
            'w-60-l',
            'w-80-ns',
            'w-100',
            'front',
            'fixed'
          )}
          hide={!project}
        >
          <SidePage toggle={this.toggle} project={project} />
        </MenuAnimation>
        <div className='mw8 center pa3 f4'>
          <div className='mb4 mt3'>
            <p>
              Hi, my name's Michael. I work as an in-house lawyer in London. In my spare time I make Internet things.
            </p>
            <p>
              In part I'm inspired by the interface between the law and programming but also in part because I just enjoy learning new technologies.
            </p>
            <p> Here's some of my work:</p>
            <p>
              <Link
                className='dark-gray dim'
                to='/react-based-contract-components'
              >
                React-based contract components
              </Link>
            </p>
          </div>
          <ul className='list ma0 pa0 flex flex-wrap'>
            {projects.map(({ node }) => {
              console.log(this.getStyle(node.mainColor, node.shadowColor))
              return (
                <div key={node.id} className='mb4 w-50-l w-50-ns w-100'>
                  <li
                    style={this.getStyle(node.mainColor, node.shadowColor)}
                    className='h-100 mr4-ns mr0 pa3'
                  >
                    <Project toggle={toggle} key={node.id} project={node} />
                  </li>
                </div>
              )
            })}
          </ul>
          <div className='mt4'>
            I also wrote some stuff <Link to='/posts'>here</Link>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Home

const MenuAnimation = styled.div`
transition: margin-left 500ms ease-in;
`
