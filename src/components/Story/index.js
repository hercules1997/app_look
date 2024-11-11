import React from 'react'
import {Box, Text, Cover, Touchable} from '..'
import {colors} from '../../styles/theme.json'
import moment from 'moment'
const Story = ({story}) => {
  return (
    <Touchable
      onPress={() => alert('teste')}
      background="gray50"
      radius="10px"
      height="190px"
      width="150px"
      spacing="0px 10px 0px"
    >
      <Cover width="100%" height="100%" image={story?.cover}>
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
            image={story?.owner?.photo}
          />

          <Box height="50px" justify="flex-end">
            <Text color="light">{story?.owner?.username}</Text>
            <Text color="light" variant="small">
              {moment(story?.createdAt).fromNow()}
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  )
}
export default Story
