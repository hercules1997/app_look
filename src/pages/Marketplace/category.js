import React, {useEffect, useState} from 'react'
import {Box, Touchable} from '../../components'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Productlist from '../../components/Product/list'
import api from '../../services/api'
import Empty from '../../components/Empty'

const Category = ({navigation, route}) => {
  const {category} = route?.params
  const [loading, setLoading] = useState(false)
  const [products, setProduct] = useState([])

  const getProducts = async () => {
    try {
      setLoading(true)
      setTimeout(async () => {
        const {data: productsData} = await api.get(`/products`, {
          params: {
            categoryId: category.id
          }
        })
        setProduct(productsData)
        setLoading(false)
      }, 900)
    } catch (error) {
      alert(err.message)
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getProducts()

      return unsubscribe
    })
  }, [navigation])

  return (
    <Box align="center">
      <Header
        title={category?.title}
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

      {loading && <Empty loading />}
      {!loading && <>{products && <Productlist products={products} />}</>}
    </Box>
  )
}

export default Category
