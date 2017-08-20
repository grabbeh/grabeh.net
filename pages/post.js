import React from 'react'
import Page from '../components/Page'
import Post from '../components/Post'
import 'isomorphic-fetch'

export default class extends React.Component {
  static async getInitialProps ({ req, query }) {
    const baseUrl = req ? `${req.protocol}://${req.headers.host}` : ''
    const fullUrl = `${baseUrl}/api/post?title=${query.title}`
    const res = await fetch(fullUrl)
    const post = await res.json()
    return { post }
  }

  render () {
    const { post } = this.props

    return (
      <Page>
        <Post {...post} />
      </Page>
    )
  }
}
