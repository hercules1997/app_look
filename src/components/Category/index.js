import React from 'react'
import {ScrollView, Touchable, Cover, Title, Text, Spacer, Box} from '..'
import utils from '../../utils'
import {colors} from '../../styles/theme.json'

import {useNavigation} from '@react-navigation/native'

const Category = ({category}) => {
  const {navigate} = useNavigation()

  return (
    <Touchable
      onPress={() => navigate('Category', {category})}
      width="100%"
      height="180px"
      radius="10px"
      spacing="10px 0px"
    >
      <Cover width="100%" height="100%" image={category?.cover}>
        <Box
          width="100%"
          justify="center"
          align="center"
          background={utils.toAlpha(colors.black, 40)}
        >
          <Title color="light" bold>
            {category?.title}
          </Title>
          <Spacer />
          <Text color="light"> {category?.items} Items</Text>
        </Box>
      </Cover>
    </Touchable>
  )
}

export default Category
