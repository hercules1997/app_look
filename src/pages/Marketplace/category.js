import React from 'react'
import {Box, Touchable} from '../../components'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Productlist from '../../components/Product/list'
import { useNavigation } from '@react-navigation/native'

const Category = () => {
  const { navigate } = useNavigation()

  return (
    <Box align="center">
      <Header
        title="Categoria X"
        right={() => (
          <Touchable
            width="70px"
            hasPadding
            onPress={() => navigate('Marketplace')}
          >
            <Icon name="bag" size={25} />
          </Touchable>
        )}
      />
      <Productlist />
    </Box>
  )
}

export default Category
