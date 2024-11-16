import React from 'react'
import {ScrollView, Text} from '..'
import Category from '.'

const Categorylist = ({categories}) => {
  return (
    <ScrollView
      fluid
      style={{paddingLeft: 20, paddingTop: 20, paddingRight: 20}}
    >
      {categories?.map(category => (
        <Category category={category} />
      ))}
    </ScrollView>
  )
}

export default Categorylist
