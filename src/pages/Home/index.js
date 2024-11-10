/* eslint-disable prettier/prettier */

import React, {useContext, useEffect, useState} from 'react'
import {Box, Button, Spacer, Text, Title} from '../../components'
import {ActivityIndicator, StatusBar} from 'react-native'
import {colors} from '../../styles/theme.json'
import {useNavigation} from '@react-navigation/native'
import {AppContext} from '../../contexts/app'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Home = () => {
  const {navigate} = useNavigation()
  const [loading, setLoading] = useState(true)
  const {setUser} = useContext(AppContext)

  const checkLogged = async () => {
    setLoading(true)

    const loggedUser = await AsyncStorage.getItem('@user')
    if (loggedUser) {
      setUser(JSON.parse(loggedUser))
      navigate('Feed')
    } else {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkLogged()
  }, [])

  return (
    <>
      <StatusBar backgroundColor={`${colors.dark}`} barStyle="dark" />
      <Box hasPadding align="center" background="dark">
        <Box justify="center" align="center" fluid>
          <Title color="light" variant="big" bold>
            Look App
          </Title>
          <Spacer />
          <Text align="center" spacing="0px 40px">
            Stay on top of the fashin wold and buy your favorite looks.
          </Text>
          <Spacer />
          {loading && (
            <>
              <Spacer size="40px" />
              <ActivityIndicator size="large" />
            </>
          )}
        </Box>
        {!loading && (
          <Box justify="flex-end" fluid align="center">
            <Spacer size="150px" />
            <Button block onPress={() => navigate('SingIn')}>
              <Text color="light">SigIn my account</Text>
            </Button>
            <Spacer size="20px" />

            <Text onPress={() => navigate('SingUp')} color="light" underline>
              Create new account
            </Text>
          </Box>
        )}
      </Box>
    </>
  )
}

export default Home
