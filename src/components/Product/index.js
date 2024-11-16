import React from 'react'
import {Box, Touchable, Text, Cover, Spacer} from '..'
import {useNavigation} from '@react-navigation/native'

const Product = ({product, selected = false}) => {
  const {navigate} = useNavigation()

  return (
    <Touchable
      onPress={() => navigate('Product', {product})}
      hasPadding={!selected}
      row
      background="light"
      spacing={selected ? '5px 0' : '0px 0px 5px 0px'}
      justifyContent="center"
      alignItems="center"
      fluid
      width="100%"
    >
      <Cover
        justifyContent="center"
        alignItems="center"
        width="80px"
        height="80px"
        image={product?.cover}
      />
      <Box
        hasPadding
        alignItems="center"
        justifyContent="center"
        style={{paddingTop: 0, paddingBottom: 0}}
      >
        {!selected && <Text color="dark">{product?.brand}</Text>}
        <Text color="dark" bold>
          {product?.title}
        </Text>
        <Spacer />
        {selected && (
          <Box>
            <Text color="dark">Size: {product?.size}</Text>
          </Box>
        )}
        <Box row width="100%" justify="space-between">
          <Text color="dark">{product?.price}</Text>
          <Text color="danger">{selected ? 'Remove' : 'Add to Cart'}</Text>
        </Box>
      </Box>
    </Touchable>
  )
}

export default Product
