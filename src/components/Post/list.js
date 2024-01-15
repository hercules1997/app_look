import React from 'react'

import {Box, ScrollView, Text} from '..'
import Post from '.'

export default function PostList() {
  return (
    <Box fluid >
      {Array.from(Array(20))?.map(item => (
        <Post />
      ))}
    </Box>
  )
}
