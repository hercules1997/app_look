import React from 'react'
import { Touchable} from '../../components'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import {useNavigation} from '@react-navigation/native'
import Categorylist from '../../components/Category/list'

const Marketplace = () => {
  const {navigate} = useNavigation()
  return (
    <>
      <Header
        title="Categories"
        right={() => (
          <Touchable
            width="70px"
            hasPadding
            onPress={() => navigate('Category')}
          >
            <Icon name="bag" size={25} />
          </Touchable>
        )}
      />
      <Categorylist />
    </>
  )
}

export default Marketplace
