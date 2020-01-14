import React from 'react'
import ListItem from '../general/ListItem'

export const List = props => (
  <ListItem
    style={{ listStyleType: 'circle' }}
    pb={2}
    fontSize={[2, 3]}
    lineHeight='text'
    fontWeight='light'
    color='grey'
  >
    {props.children}
  </ListItem>
)

export default List
