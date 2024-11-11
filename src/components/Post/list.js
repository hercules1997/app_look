import React from 'react'

import {Box, ScrollView, Text} from '..'
import Post from '.'

export default function PostList({posts}) {

  return (
    <Box fluid>
      {posts?.map(post => (
        <Post post={post} />
      ))}
    </Box>
  )
}
