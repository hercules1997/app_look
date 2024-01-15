import React from 'react'

import {Box, ScrollView, Text} from '..'
import Story from '.'

export default function StoryList() {
  return (
    <Box fluid height="260px">
      <Box row fluid justify="space-between" height="60px" hasPadding>
        <Text bold x color="dark">
          Stories
        </Text>
        <Text color="danger" underline>
          Show all
        </Text>
      </Box>
      <ScrollView horizontal style={{paddingLeft: 20}}  >
        {Array.from(Array(20))?.map(item => (
          <Story />
        ))}
      </ScrollView>
    </Box>
  )
}
