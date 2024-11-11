/* eslint-disable prettier/prettier */
import React from 'react'
import {Box, Title, Touchable} from '../../components'
import {SafeAreaView, StatusBar, View} from 'react-native'
import {colors} from '../../styles/theme.json'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native'
import utils from '../../utils'

const Header = ({title = 'Explore', right = null, goBack = false}) => {
  const navigation = useNavigation()

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: utils.toAlpha(colors.muted, 50),
        backgroundColor: colors.light,
        width: '100%'
      }}
    >
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Touchable
          width="70px"
          justify="center"
          align="center"
          hasPadding
          onPress={() => navigation[!goBack ? 'openDrawer' : 'goBack']()}
        >
          <Icon name={!goBack ? 'menu' : 'arrow-left'} size={30} />
        </Touchable>
        <Box align="center" justify="center">
          <Title>{title}</Title>
        </Box>
        {right ? right() : <Touchable hasPadding width="70px"></Touchable>}
      </SafeAreaView>
    </View>
  )
}

export default Header
