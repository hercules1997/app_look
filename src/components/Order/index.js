import React from 'react'
import {Box, Spacer, Text, Title} from '..'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import {colors} from '../../styles/theme.json'
import utils from '../../utils'
const Order = () => {
  return (
    <Box
      radius="5px"
      spacing="0px 0px 10px 0px"
      border={`1px solid ${utils.toAlpha(colors.muted, 50)}`}
    >
      <Box
        hasPadding
        row
        justify="space-between"
        width="100%"
        style={{
          borderBottomWidth: 0.5,
          borderBottomColor: utils.toAlpha(colors.muted, 50)
        }}
      >
        <Box row align="center">
          <Icon name="check" size={20} color={colors.success} />
          <Text color="success" spacing="0px 0px 0px 10px">
            DELIVERD
          </Text>
        </Box>

        <Text color="dark">August 17, 2016</Text>
      </Box>
      <Box
        hasPadding
        width="100%"
        style={{
          borderBottomWidth: 0.5,
          borderBottomColor: utils.toAlpha(colors.muted, 50)
        }}
      >
        <Title>Order nº12123123</Title>
        <Spacer />
        <Text>
          Traking number: <Text color="dark">234234234234</Text>
        </Text>
      </Box>
      <Box hasPadding row justify="space-between" width="100%">
        <Text>
          Value of items: <Text color="dark">$554</Text>
        </Text>
        <Text>
          Quanity: <Text color="dark">3</Text>
        </Text>
      </Box>
    </Box>
  )
}

export default Order
