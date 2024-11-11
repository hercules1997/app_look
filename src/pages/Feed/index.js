import React, {useEffect, useState} from 'react'
import {Box, ScrollView, Spacer, Text} from '../../components'
import Header from '../../components/Header'
import StoryList from '../../components/Story/list'
import PostList from '../../components/Post/list'

import api from '../../services/api'
import Empty from '../../components/Empty'
const Feed = ({navigation}) => {
  const [loading, setLoading] = useState(false)
  const [feed, setFeed] = useState({
    stories: [],
    posts: []
  })

  const getFeed = async () => {
    try {
      setLoading(true)
      setTimeout(async () => {
        const {data: feedData} = await api.get('/feed')
        setFeed(feedData)
        setLoading(false)
      }, 2000)
    } catch (error) {
      alert(err.message)
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getFeed()

      return unsubscribe
    })
  }, [navigation])

  return (
    <Box>
      <Header title="Explore" />
      {loading && <Empty loading message="Sorry! Error when loading!" />}

      {!loading && (
        <ScrollView>
          <StoryList stories={feed?.stories} />
          <Spacer />
          <PostList posts={feed?.posts} />
        </ScrollView>
      )}
    </Box>
  )
}

export default Feed
