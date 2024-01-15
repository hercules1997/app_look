/* eslint-disable prettier/prettier */

import React from 'react'
import {Box, Button, Spacer, Text, Title, Input} from '../../components'
import {StatusBar} from 'react-native'
import {colors} from '../../styles/theme.json'

const SingIn = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor={`${colors.primary}`} barStyle="dark" />
      <Box hasPadding align="center" justify="center" background="light">
        <Title color="dark" variant="normal" bold>
          LOOKUP
        </Title>
        <Spacer />
        <Title color="dark" variant="normal" bold>
          Singin my account.
        </Title>

        <Spacer size="30px" />

        <Input placeholder="E-mail" />
        <Spacer />
        <Input placeholder="Password" secureTextEntry />

        <Spacer size="30px" />
        <Button block  onPress={() => navigation.navigate('Feed')}>
          <Text color="light">SigIn my account</Text>
        </Button>
        <Spacer size="20px" />

        <Text
          color="gray50"
          underline
          onPress={() => navigation.navigate('SingUp')}
        >
          Create new account
        </Text>
      </Box>
    </>
  )
}

export default SingIn
