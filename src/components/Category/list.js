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
        <Category
          title={category?.title}
          description={category?.items}
          cover={category?.cover}
        />
      ))}
    </ScrollView>
  )
}

export default Categorylist
