import React from 'react'
import {Box, Text, Cover, Touchable} from '..'
import {colors} from '../../styles/theme.json'
const Story = () => {
  return (
    <Touchable
      onPress={() => alert('teste')}
      background="gray50"
      radius="10px"
      height="190px"
      width="150px"
      spacing="0px 10px 0px"
    >
      <Cover
        width="100%"
        height="100%"
        image="https://media.vogue.co.uk/photos/60315dc888f7f3eda2ddfcca/2:3/w_2560%2Cc_limit/PIECES%2520OF%2520A%2520WOMAN%25202.jpg"
      >
        <Box
          fluid
          hasPadding
          background={`${colors.black}80`}
          justify="space-between"
        >
          <Cover
            width="40px"
            height="40px"
            circle
            border={`${colors.light}`}
            image="https://media.vogue.co.uk/photos/60315dc888f7f3eda2ddfcca/2:3/w_2560%2Cc_limit/PIECES%2520OF%2520A%2520WOMAN%25202.jpg"
          />

          <Box height="50px" justify="flex-end">
            <Text color="light">Julia Ficher</Text>
            <Text color="light" variant="small">
              2 mins ago
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  )
}
export default Story
