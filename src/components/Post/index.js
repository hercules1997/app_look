import React from 'react'
import {Box, Cover, Spacer, Text, Touchable} from '..'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import {colors} from '../../styles/theme.json'
import hero from '../../assets/hero.png'
const Post = () => {
  return (
    <Box background="light" spacing="10px 5px" hasPadding fluid>
      <Box row align="center" justify="center">
        <Cover
          width="40px"
          height="40px"
          circle
          justify="center"
          image="https://media.vogue.co.uk/photos/60315dc888f7f3eda2ddfcca/2:3/w_2560%2Cc_limit/PIECES%2520OF%2520A%2520WOMAN%25202.jpg"
        />
        <Box spacing=" 0px 0px 0px 10px">
          <Text bold color="dark">
            Roberto
          </Text>
          <Text variant="small">20 Minutes ago</Text>
        </Box>
        <Touchable width="70px" height="30px" align="flex-end">
          <Icon name="options" size={15} color={colors.muted} />
        </Touchable>
      </Box>

      <Cover
        spacing="10px 0px"
        width="100%"
        height="190px"
        radius="8px"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-pRuJI6P0hoMZi2BO7IKqUxWnjr-cOitwlQ&usqp=CAU"
      />
      <Spacer />
      <Box row align="center" justify="center">
        {Array.from(Array(3))?.map(item => (
          <Cover
            width="30px"
            height="30px"
            circle
            justify="center"
            spacing="0px -18px 0px 0px"
            image="https://media.vogue.co.uk/photos/60315dc888f7f3eda2ddfcca/2:3/w_2560%2Cc_limit/PIECES%2520OF%2520A%2520WOMAN%25202.jpg"
          />
        ))}

        <Text variant="small" spacing="0px 0px 0px 22px" color="dark">
          Liked by 10,098
        </Text>
        <Box row align="center" justify="flex-end" fluid>
          <Touchable width="50px" height="30px" align="flex-end">
            <Icon name="heart" size={20} color={colors.danger} />
          </Touchable>
          <Touchable width="50px" height="30px" align="flex-end">
            <Icon name="bubble" size={20} color={colors.muted} />
          </Touchable>
          <Touchable width="50px" height="30px" align="flex-end">
            <Icon name="share" size={20} color={colors.muted} />
          </Touchable>
        </Box>
      </Box>
      <Spacer />
      <Text color="dark" small>
        Interviw: Shoe Designer Jhon Fluevog On New Book. Spiritualy And 'Slow
        Fashion'
      </Text>
    </Box>
  )
}
export default Post
