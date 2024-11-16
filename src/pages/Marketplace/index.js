import React, {useEffect, useState} from 'react'
import {Touchable} from '../../components'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Categorylist from '../../components/Category/list'
import api from '../../services/api'
import Empty from '../../components/Empty'
const Marketplace = ({navigation}) => {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const getCategories = async () => {
    try {
      setLoading(true)
      setTimeout(async () => {
        const {data: categoryData} = await api.get('/categories')
        setCategories(categoryData)
        setLoading(false)
      }, 900)
    } catch (error) {
      alert(err.message)
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getCategories()

      return unsubscribe
    })
  }, [navigation])

  return (
    <>
      <Header
        title="Categories"
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
      {!loading && (
        <>{categories && <Categorylist categories={categories} />}</>
      )}
    </>
  )
}

export default Marketplace
