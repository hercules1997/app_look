import React from 'react'
import {Box, Cover, Spacer, Text, Touchable} from '..'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import {colors} from '../../styles/theme.json'
import moment from 'moment'
const Post = ({post}) => {
  console.log(post)
  return (
    <Box background="light" spacing="10px 5px" hasPadding fluid>
      <Box row align="center" justify="center">
        <Cover
          width="40px"
          height="40px"
          circle
          justify="center"
          image={post?.owner?.photo}
        />
        <Box spacing=" 0px 0px 0px 10px">
          <Text bold color="dark">
            {post?.owner?.username}
          </Text>
          <Text variant="small">{moment(post?.createdAt).fromNow()}</Text>
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
        image={post?.cover}
      />
      <Spacer />
      <Box row align="center" justify="center">
        {post?.likeInfos?.photos?.map(photo => (
          <Cover
            width="30px"
            height="30px"
            circle
            justify="center"
            spacing="0px -18px 0px 0px"
            image={photo}
          />
        ))}

        <Text variant="small" spacing="0px 0px 0px 22px" color="dark">
          {post?.likeInfos?.description}
        </Text>
        <Box row align="center" justify="flex-end" fluid>
          <Touchable width="50px" height="30px" align="flex-end">
            <Icon
              name="heart"
              size={20}
              color={colors[post?.isLiked ? 'danger' : 'muted']}
            />
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
        {post?.description}
      </Text>
    </Box>
  )
}
export default Post
