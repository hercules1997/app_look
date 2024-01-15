import React from 'react'
import {ScrollView, Text} from '..'
import Category from '.'

const Categorylist = () => {
  return (
    <ScrollView
      fluid
      style={{paddingLeft: 20, paddingTop: 20, paddingRight: 20}}
    >
      {Array.from(Array(10))?.map(item => (
        <Category title="Category" description="123 Items" />
      ))}
    </ScrollView>
  )
}

export default Categorylist
