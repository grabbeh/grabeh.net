import React from 'react'
import Page from '../components/Page'
import Home from '../components/Home'
import BodyContainer from '../components/BodyContainer'

export default class extends React.Component {
  render () {
    return (
      <Page>
        <BodyContainer>
          <Home />
        </BodyContainer>
      </Page>
    )
  }
}
