import * as React from 'react'

import {Box, Title} from './components'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator
} from '@react-navigation/drawer'
import {colors} from './styles/theme.json'
import Home from './pages/Home'
import SingIn from './pages/SingIn'
import SingUp from './pages/SingUp'
import Feed from './pages/Feed'
import utils from './utils'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import Marketplace from './pages/Marketplace'
import Cart from './pages/Cart'
import Catergory from './pages/Marketplace/category'
import Product from './pages/Marketplace/product'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const CustomDrawerComponent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <Title color="light" variant="big" hasPadding bold>
        LOOKAPP
      </Title>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerContent={props => <CustomDrawerComponent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: colors.light,
        drawerInactiveTintColor: utils.toAlpha(colors.light, 50),
        drawerStyle: {
          backgroundColor: utils.toAlpha(colors.black, 90),
          padding: 20
        }
      }}
    >
      <Drawer.Screen
        name="Feed"
        options={{
          headerShown: false,
          drawerIcon: ({focused, color}) => (
            <Icon name="people" color={color} size={18} />
          )
        }}
        component={Feed}
      />
      <Drawer.Screen
        name="Marketplace"
        options={{
          headerShown: false,
          drawerIcon: ({focused, color}) => (
            <Icon name="tag" color={color} size={18} />
          )
        }}
        component={Marketplace}
      />
      <Drawer.Screen
        name="Orders"
        options={{
          headerShown: false,
          drawerIcon: ({focused, color}) => (
            <Icon name="basket" color={color} size={18} />
          )
        }}
        component={Feed}
      />
      {/* <Drawer.Screen
        name="Categories"
        options={{
          headerShown: false,
          drawerIcon: ({focused, color}) => (
            <Icon name="basket" color={color} size={18} />
          )
        }}
        component={Catergory}
      /> */}
    </Drawer.Navigator>
  )
}
//TODO ***Não esquecer de mudar a inicialização***
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cart">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SingIn"
          component={SingIn}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SingUp"
          component={SingUp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Feed"
          component={DrawerComponent}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Marketplace"
          component={DrawerComponent}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Product"
          component={Product}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Category"
          component={Catergory}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Routes
