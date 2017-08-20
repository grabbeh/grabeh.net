import React from 'react'
import Page from '../components/Page'
import 'isomorphic-fetch'
import Posts from '../components/Posts'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.headers.host}` : ''
    const fullUrl = `${baseUrl}/api/posts`
    const res = await fetch(fullUrl)
    const titles = await res.json()

    return { titles: titles }
  }

  render () {
    const { titles } = this.props
    return (
      <Page>
        <Posts titles={titles} />
      </Page>
    )
  }
}
