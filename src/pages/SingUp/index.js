/* eslint-disable prettier/prettier */

import React, {useContext, useState} from 'react'
import {Box, Button, Spacer, Text, Title, Input} from '../../components'
import {StatusBar} from 'react-native'

import {colors} from '../../styles/theme.json'
import Loading from '../../components/Loading'
import api from '../../services/api'
import {AppContext} from '../../contexts/app'
import AsyncStorage from '@react-native-async-storage/async-storage'


const SingUp = ({navigation: { replace, goBack}}) => {
    const {setUser: setUserContext} = useContext(AppContext)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const requestSignup = async () => {
    try {
      setLoading(true)
      if (
        user.name?.length === 0 ||
        user.email?.length === 0 ||
        user.password?.length === 0
      ) {
        alert('Fill all fild')
        return false
      }

      const {data: loggedUser} = await api.post('/users', user)

      if(!loggedUser){
        setLoading(false)
        alert('Not possible create user')
        return false
      }

      await AsyncStorage.setItem('@user', JSON.stringify(loggedUser))

      // Atualizando
      setUserContext(loggedUser)

      replace('Feed')

      console.log(loggedUser)
    } catch (error) {
      alert(error.message)
    }
  }

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

        <Input
          placeholder="Name"
          editable={!loading}
          value={user.name}
          onChangeText={name => setUser({...user, name})}
        />
        <Spacer />
        <Input
          placeholder="E-mail"
          editable={!loading}
          value={user.email}
          onChangeText={email => setUser({...user, email: email.toLocaleLowerCase()})}
        />
        <Spacer />
        <Input
          placeholder="Password"
          editable={!loading}
          secureTextEntry
          value={user.password}
          onChangeText={password => setUser({...user, password})}
        />

        <Spacer size="50px" />
        {loading && <Loading />}
        {!loading && (
          <>
            <Button block>
              <Text color="light" onPress={() => requestSignup()}>
                Create a account
              </Text>
            </Button>
            <Spacer size="20px" />

            <Text
              color="gray50"
              underline
              onPress={() => goBack()}
            >
              Back to home
            </Text>
          </>
        )}
      </Box>
    </>
  )
}

export default SingUp
