import React, {useContext, useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import {AppContext} from '../../contexts/app'
import Header from '../../components/Header'
import {Box, Button, Spacer, Text, Title, Touchable} from '../../components'
import {StretchyScrollView} from 'react-native-stretchy'
import utils from '../../utils'
import {colors} from '../../styles/theme.json'
import Picker from '../../components/Picker'
const Product = ({navigation, route}) => {
  const {addToCart, cart} = useContext(AppContext)
  const {product} = route?.params
  const [size, setSize] = useState(null)
 

  useEffect(() => {
    setSize(product?.sizes?.[0]?.value)
  }, [product, cart])

  return (
    <>
      <Header
        title={product?.title}
        goBack
        right={() => (
          <Touchable width="70px" hasPadding onPress={() => navigate('Cart')}>
            <Icon name="bag" size={25} />
          </Touchable>
        )}
      />
      <StretchyScrollView
        image={{
          uri: product?.cover
        }}
        imageOverlay={<Box background={utils.toAlpha(colors.dark, 40)}></Box>}
        foreground={
          <>
            <Box hasPadding justify="flex-end">
              <Title bold color="light" variant="big">
                $ {product?.price}
              </Title>
            </Box>
          </>
        }
      >
        <Box hasPadding background="light">
          <Text color="black">{product?.type}</Text>
          <Spacer size="30px" />
          <Title color="black">{product?.title}</Title>
          <Spacer size="30px" />
          <Text color="dark">{product?.description}</Text>
          <Spacer size="30px" />
          <Picker
            title="Size"
            options={product?.sizes}
            initialValue={product?.sizes?.[0]?.value}
            onChange={value => setSize(value)}
          />
          <Spacer size="30px" />

          <Button
            block
            onPress={() =>
              addToCart({...product, size}, navigation.navigate('Cart'))
            }
          >
            <Text>Add to Card</Text>
          </Button>
        </Box>
      </StretchyScrollView>
    </>
  )
}
export default Product
