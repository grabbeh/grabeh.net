import React from 'react'
import Meta from './Meta'
import Header from '../components/Header'
import Container from '../components/Container'
import MainColumn from '../components/MainColumn'
import SideBar from '../components/SideBar'

export default ({ children }) => (
  <div>
    <Meta />
    <Header />
    <Container>
      <MainColumn>
        {children}
      </MainColumn>
      <SideBar />
    </Container>
  </div>
)
