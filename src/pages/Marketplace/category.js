import React from 'react'
import {Box, Touchable} from '../../components'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Productlist from '../../components/Product/list'

const Category = ({navigation}) => {
  return (
    <Box align="center">
      <Header
        title="Categoria X"
        goBack
        onPress={() => navigation.openDrawer()}
        right={() => (
          <Touchable
            width="70px"
            hasPadding
            onPress={() => navigation.navigate('Cart')}
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
