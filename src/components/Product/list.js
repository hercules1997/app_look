import React from 'react'
import {ScrollView, Text} from '..'
import Product from '.'

const Productlist = () => {
  return (
    <ScrollView fluid>
      {Array.from(Array(10))?.map(item => (
        <Product
          brand="Carlos Alberto"
          price="$2200"
          title="Large Decription"
          cover="https://media.vogue.co.uk/photos/60315dc888f7f3eda2ddfcca/2:3/w_2560%2Cc_limit/PIECES%2520OF%2520A%2520WOMAN%25202.jpg"
        />
      ))}
    </ScrollView>
  )
}

export default Productlist
