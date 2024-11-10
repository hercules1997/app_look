import React from 'react'

import {Box, Button, Cover, Spacer, Text, Title} from '../'

const CongratsModal = () => {
  return (
    <Box
      background="light"
      hasPadding
      justify="center"
      align="center"
      style={{
        position: 'absolute',
        zIndex: 9999,
        width: '100%',
        height: '100%'
      }}
    >
      <Spacer size="50px" />
      <Cover
        width={200}
        height={200}
        source={require('../../assets/check-circle.png')}
        background="transparent"
      />
      <Title>Congratulations!!!</Title>
      <Spacer />
      <Text>Your items are on the way and arrive shortly</Text>
      <Spacer size="50px" />
      <Button block onPress={() => {}}>
        <Text color="light">Track your Order</Text>
      </Button>
    </Box>
  )
}

export default CongratsModal
