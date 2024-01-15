/* eslint-disable prettier/prettier */

import React from 'react'
import {Box, Button, Spacer, Text, Title, Input} from '../../components'
import {StatusBar} from 'react-native'

import {colors} from '../../styles/theme.json'

const SingUp = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor={`${colors.primary}`} barStyle="dark" />
      <Box hasPadding align="center" justify="center" background="light">
        <Title color="dark" variant="normal" bold>
          Create new account.
        </Title>
        <Spacer />
        <Text aling="center" spacing="0px 40px">
          Enter your details below:
        </Text>
        <Spacer size="50px" />

        <Input placeholder="Name" />
        <Spacer />
        <Input placeholder="E-mail" />
        <Spacer />
        <Input placeholder="Password" secureTextEntry />

        <Spacer size="50px" />
        <Button block>
          <Text color="light">Create a account</Text>
        </Button>
        <Spacer size="20px" />

        <Text
          color="gray50"
          underline
          onPress={() => navigation.navigate('SingIn')}
        >
          SigIn my account
        </Text>
      </Box>
    </>
  )
}

export default SingUp
