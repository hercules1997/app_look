import React from 'react'
import {Box, ScrollView, Text, Touchable} from '..'
import {colors} from '../../styles/theme.json'
const Tabs = ({allTabs = [], active = ''}) => {
  const totalTabs = allTabs?.length
  const activeTabStyle = {
    borderBottomWidth: 3,
    borderBottomColor: colors.danger,
    backgroundColor: colors.danger
    
  }
  return (
    <ScrollView
      horizontal
      style={{
        maxHeight: 60,
          backgroundColor: colors.danger,  
      }}
    >
      {allTabs?.map(tabValue => (
        <Touchable
          hasPadding
          style={[
            {
                        minWidth: `${100 / totalTabs}%`,
              alignItems: 'center'
            },
            active === tabValue.value ? activeTabStyle : {}
          ]}
        >
          <Text>{tabValue.label}</Text>
        </Touchable>
      ))}
    </ScrollView>
  )
}

export default Tabs
