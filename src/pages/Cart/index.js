import React from 'react'
import {Box, Text} from '../../components'
import Header from '../../components/Header'
import Tabs from '../../components/Tabs'

const Cart = () => {
  const listTabs = [
    {label: 'Cart', key: 'cart'},
    {label: 'Payment', key: 'payment'}
  ]
  return (
    <>
      <Header title="Cart" goBack></Header>
      <Tabs allTabs={listTabs} />
    </>
  )
}

export default Cart
