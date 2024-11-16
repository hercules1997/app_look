import React from 'react'
import {ScrollView, Text} from '..'
import Product from '.'

const Productlist = ({products}) => {
  return (
    <ScrollView fluid>
      {products?.map(product => (
        <Product product={product} />
      ))}
    </ScrollView>
  )
}

export default Productlist
