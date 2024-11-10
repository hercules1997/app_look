import React from 'react'
import {ScrollView, Text} from '..'
import Order from '.'

const Orderslist = () => {
  return (
    <ScrollView fluid background="light" hasPadding>
      {Array.from(Array(3))?.map(item => (
        <Order />
      ))}
    </ScrollView>
  )
}

export default Orderslist
