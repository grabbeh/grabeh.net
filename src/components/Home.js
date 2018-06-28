import HomeSection from './HomeSection'
import React, { Component, Fragment } from 'react'
import SidePage from './SidePage'
import cn from 'classnames'
import styled from 'styled-components'
import Link from 'gatsby-link'

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
        <div className='mw8 center f4 pa3'>
          <div className='mb4 mt3 font f3-ns f4'>
            <p>
              Hi, my name's Michael. I work as an in-house lawyer in London. In my spare time I make Internet things.
            </p>
            <p>
              In part I'm inspired by the interface between the law and programming but also in part because I just enjoy learning new technologies.
            </p>
            <p> Here's some of my work:</p>
            <p>
              <Link to='/react-based-contract-components'>
                React-based contract components
              </Link>
            </p>
          </div>
          <div className='flex flex-wrap'>
            {projects.map(({ node }) => {
              return (
                <div key={node.id} className='w-33-l w-50-ns w-100'>
                  <HomeSection toggle={toggle} key={node.id} project={node} />
                </div>
              )
            })}
          </div>
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
