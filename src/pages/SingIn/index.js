/* eslint-disable prettier/prettier */

import React, {useContext, useState} from 'react'
import {Box, Button, Spacer, Text, Title, Input} from '../../components'
import {StatusBar} from 'react-native'
import {colors} from '../../styles/theme.json'
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {AppContext} from '../../contexts/app'
const SingIn = ({navigation: {navigate, replace}}) => {
  const {setUser: setUserContext} = useContext(AppContext)
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const requestLogin = async () => {
    try {
      if (user.email?.length === 0 || user.password?.length === 0) {
        alert('Fill all fild')
        return false
      }
      const {data: users} = await api.get('/users', {
        params: {
          email: user.email?.toLocaleLowerCase(),
          password: user.password
        }
      })

      const [loggedUser] = users
      if (!loggedUser) {
        alert('User not found!!')
        return false
      }
      //Gravando dados no dispositivo
      await AsyncStorage.setItem('@user', JSON.stringify(loggedUser))

      // Atualizando
      setUserContext(loggedUser)

      replace('Feed')

      console.log(loggedUser)
    } catch (error) {
      alert(err.message)
    }
  }

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

        <Input
          placeholder="E-mail"
          value={user.email}
          onChangeText={email => setUser({...user, email})}
        />
        <Spacer />
        <Input
          placeholder="Password"
          secureTextEntry
          value={user.password}
          onChangeText={password => setUser({...user, password})}
        />

        <Spacer size="30px" />
        <Button block onPress={() => requestLogin()}>
          <Text color="light">SigIn my account</Text>
        </Button>
        <Spacer size="20px" />

        <Text color="gray50" underline onPress={() => navigate('SingUp')}>
          Create new account
        </Text>
      </Box>
    </>
  )
}

export default SingIn
