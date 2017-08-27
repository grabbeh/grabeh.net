import React from 'react'
import fetch from 'isomorphic-fetch'
import Page from '../components/Page'
import Home from '../components/Home'
import BodyContainer from '../components/BodyContainer'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.headers.host}` : ''
    const fullUrl = `${baseUrl}/api/projects`
    const res = await fetch(fullUrl)
    const projects = await res.json()
    return { projects }
  }

  render () {
    const { projects } = this.props
    return (
      <Page>
        <BodyContainer>
          <Home projects={projects} />
        </BodyContainer>
      </Page>
    )
  }
}
