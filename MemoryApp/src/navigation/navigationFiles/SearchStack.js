import { StyleSheet, Text, View, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import SearchScreen from '../../screens/SearchStackScreens/SearchScreen'
import UserProfileScreen from '../../screens/SharedScreens/UserProfileScreen'
import PostScreen from '../../screens/SharedScreens/PostScreen'
import logo from '../../../assets/m__mLogoColors.png'

const Stack = createStackNavigator()

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerBackTitleVisible: false,
      headerTintColor: 'black'
    }}>
      <Stack.Screen name="Search" component={SearchScreen} options={{
        headerLeft: () => (
          <Image style={{ width: 30, marginLeft: 13, marginBottom: 5 }} source={logo} resizeMode="contain" />
        ),
      }}
      />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
    </Stack.Navigator>
  )
}

export default SearchStack

const styles = StyleSheet.create({})