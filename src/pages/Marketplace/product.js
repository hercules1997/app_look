import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import {useNavigation} from '@react-navigation/native'


import Header from '../../components/Header'
import {Box, Button, Spacer, Text, Title, Touchable} from '../../components'
import {StretchyScrollView} from 'react-native-stretchy'
import utils from '../../utils'
import {colors} from '../../styles/theme.json'
import Picker from '../../components/Picker'
const Product = () => {
  const {navigate} = useNavigation()
  const optionSize = [
    {label: 'P', value: 'P'},
    {label: 'M', value: 'M'},
    {label: 'G', value: 'G'},
    {label: 'XG', value: 'XG'},
    {label: 'XXG', value: 'XXG'}
  ]

  return (
    <>
      <Header
        title="Produto X"
        goBack
        right={() => (
          <Touchable width="70px" hasPadding>
            <Icon name="bag" size={25} />
          </Touchable>
        )}
      />
      <StretchyScrollView
        image={{
          uri: 'https://media.vogue.co.uk/photos/60315dc888f7f3eda2ddfcca/2:3/w_2560%2Cc_limit/PIECES%2520OF%2520A%2520WOMAN%25202.jpg'
        }}
        imageOverlay={<Box background={utils.toAlpha(colors.dark, 40)}></Box>}
        foreground={
          <>
            <Box hasPadding justify="flex-end">
              <Title bold color="light" variant="big">
                R$ 100,00
              </Title>
            </Box>
          </>
        }
      >
        <Box hasPadding background="light">
          <Text color="black">TSHIRT</Text>
          <Spacer size="30px" />
          <Title color="black">A.P.C. Collection Spring 2020</Title>
          <Spacer size="30px" />
          <Text color="dark">
            Etiam gravida justo sit amet ipsum tincidunt, sed rutrum ante
            pulvinar. Sed eget quam nec risus consequat faucibus. Aliquam id dui
            placerat, consequat mauris non, efficitur erat. Curabitur
            ullamcorper a quam sed luctus. Sed quis tempus elit. Aenean
            tincidunt, lacus ut condimentum vehicula, nunc leo elementum odio, a
            vehicula metus urna eu massa. Suspendisse a iaculis quam. Curabitur
            lacinia, ligula facilisis congue volutpat, diam felis rutrum quam,
            et facilisis ante massa sed risus
          </Text>
          <Spacer size="30px" />
          <Picker
            title="Size"
            options={optionSize}
            initialValue="M"
            onChange={value => alert(`Tamanho ${value} selecionado`)}
          />
          <Spacer size="30px" />

          <Button block onPress={() => navigate('Cart')}>
            <Text>Add to Card</Text>
          </Button>
        </Box>
      </StretchyScrollView>
    </>
  )
}
export default Product
