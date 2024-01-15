/* eslint-disable prettier/prettier */

import React from 'react'
import {Box, Button, Spacer, Text, Title} from '../../components'
import {StatusBar} from 'react-native'
import {colors} from '../../styles/theme.json'
import {useNavigation} from '@react-navigation/native'

const Home = () => {
  const {navigate} = useNavigation()

  return (
    <>
      <StatusBar backgroundColor={`${colors.dark}`} barStyle="dark" />
      <Box hasPadding align="center" background="dark">
        <Box justify="center" align="center" fluid>
          <Title color="light" variant="big" bold>
            LOOKAPP
          </Title>
          <Spacer />
          <Text align="center" spacing="0px 40px">
            Stay on top of the fashin wold and buy your favorite looks.
          </Text>
        </Box>
        <Box justify="center" fluid align="center">
          <Spacer size="150px" />
          <Button block onPress={() => navigate('SingIn')}>
            <Text color="light">SigIn my account</Text>
          </Button>
          <Spacer size="20px" />

          <Text
            onPress={() => navigation.navigate('SingUp')}
            color="light"
            underline
          >
            Create new account
          </Text>
        </Box>
      </Box>
    </>
  )
}

export default Home
