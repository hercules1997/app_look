import React, {useContext, useState} from 'react'

import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import {Box, Button, ScrollView, Spacer, Text, Title} from '../../components'
import Product from '../../components/Product'
import utils from '../../utils'
import {colors} from '../../styles/theme.json'
import PaymentForm from '../../components/Forms/payment'
import CongratsModal from '../../components/Modals/congration'

import {AppContext} from '../../contexts/app'

const Cart = () => {
  const [tab, setTab] = useState('cart')
  const {cart, removeFromCart} = useContext(AppContext)

  const [showCongrats, setShowCongrats] = useState(false)
  const listTabs = [
    {label: 'Cart', value: 'cart'},

    {label: 'Payment', value: 'payment'}
  ]
  return (
    <>
      {showCongrats && <CongratsModal />}
      <Header title="Cart" goBack></Header>
      <Tabs allTabs={listTabs} active={tab} onChange={value => setTab(value)} />
      <ScrollView hasPadding background="light">
        <Spacer size="20px" />
        <Title variant="small">Order number is 8493459348</Title>
        <Spacer size="20px" />

        {tab === 'cart' && (
          <>
            {cart?.map(product => (
              <Product product={product} selected />
            ))}
            <Spacer size="30px" />

            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Order:</Text>
              <Text color="dark">$45,00</Text>
            </Box>

            <Box row width="100%" height="30px" justify="space-between">
              <Text color="success">Discount:</Text>
              <Text color="success">$-5,00</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Delivery:</Text>
              <Text color="dark">$10,00</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark" bold>
                Total Order:
              </Text>
              <Text color="dark" bold>
                $50,00
              </Text>
            </Box>
            <Spacer size="30px" />
            <Button
              block
              onPress={() => {
                setTab('payment')
              }}
            >
              <Text color="light">Place Order</Text>
            </Button>
            <Spacer size="30px" />
          </>
        )}
        {tab === 'payment' && (
          <>
            <Box
              row
              width="100%"
              justify="space-between"
              style={{
                borderBottomWidth: 0.715,
                borderBottomColor: utils.toAlpha(colors.muted, 50),
                paddingBottom: 10
              }}
            >
              <Text color="dark" bold>
                Shipping address
              </Text>
              <Text color="danger">Change</Text>
            </Box>
            <Spacer />
            <Text color="dark">
              Tiana Rosser, 4517 Washignton Ave Amarch United States
            </Text>
            <Spacer size="30px" />
            <Box
              row
              width="100%"
              justify="space-between"
              style={{
                borderBottomWidth: 0.714,
                borderBottomColor: colors.danger,
                paddingBottom: 10
              }}
            >
              <Text bold color="dark">
                Delivery details
              </Text>
              <Text color="danger">Change</Text>
            </Box>
            <Spacer />
            <Text color="dark">Standard Delivery</Text>
            <Text color="dark">Satuday 27 - Tuesday 30</Text>
            <Text color="dark">Cost: $10</Text>
            <Spacer size="30px" />
            <PaymentForm
              onChange={creditCardData => console.log(creditCardData)}
            />
            <Spacer size="30px" />
            <Button
              block
              onPress={() => {
                setShowCongrats(true)
              }}
            >
              <Text color="light">Confirmation</Text>
            </Button>
            <Spacer size="30px" />
          </>
        )}
        <Spacer size="30px" />
      </ScrollView>
    </>
  )
}

export default Cart
