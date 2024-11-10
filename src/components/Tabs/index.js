import React from 'react'
import {Box, ScrollView, Text, Touchable} from '..'
import {colors} from '../../styles/theme.json'
import {TouchableOpacity} from 'react-native-gesture-handler'
const Tabs = ({allTabs = [], active = '', onChange = tab => {}}) => {
  const totalTabs = allTabs?.length
  const activeTabStyle = {
    borderBottomWidth: 1,
    borderBottomColor: colors.danger
  }
  return (
    <ScrollView
       contentContainerStyle={{flexGrow: 1, flexDirection: 'row'}}
      style={{
        maxHeight: 70,
        backgroundColor: colors.light
      }}
      horizontal 
    >
      {allTabs?.map(tab => (
        <TouchableOpacity // Inseri o TouchableOpacity, porém o certo deivia ser o touchable normal. O caso foi que a cor da borda esta ficando preta e não estava mudando para vermelho.
          onPress={() => onChange(tab.value)}
          key={tab.index}
          hasPadding
          
          style={[
            {
              minHeight: 70,
              
              justifyContent: 'center',
              minWidth: `${100 / totalTabs}%`,
              alignItems: 'center'
            },
            active === tab.value ? activeTabStyle : {},
     
          ]}
        >
          <Text color={active === tab.value ? 'primary' : undefined}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default Tabs
