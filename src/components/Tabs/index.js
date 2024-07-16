import React from 'react'
import {Box, ScrollView, Text, Touchable} from '..'

const Tabs = ({allTabs = []}) => {
  const totalTabs = allTabs?.length
  return (
    <ScrollView horizontal >
      {allTabs?.map(tabValue => (
        <Touchable
          hasPadding
          style={{
            minWidth: `${100 / totalTabs}%`,
            alignItems: 'center'
          }}
        >
          <Text>{tabValue.label}</Text>
        </Touchable>
      ))}
    </ScrollView>
  )
}

export default Tabs
