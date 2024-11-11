import React from 'react'
import {Box, Spacer, Title} from '..'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Loading from '../Loading'
import {colors} from '../../styles/theme.json'

const Empty = ({loading = false, message = ''}) => {
  return (
    <Box justify="center" align="center" fluid>
      <Spacer size="50px" />
      {!loading && (
        <>
          <Icon name="exclamation" color={colors.primary} size={100} />
          <Spacer size="30px" />
        </>
      )}
      {loading && (
        <>
          <Loading />
          <Spacer size="30px" />
        </>
      )}
      <Title>{loading ? 'Loading...' : message}</Title>
    </Box>
  )
}

export default Empty
