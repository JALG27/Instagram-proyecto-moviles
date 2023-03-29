import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import MessagesScreen from '../../screens/MessageStackScreens/MessagesScreen'
import ChatScreen from '../../screens/MessageStackScreens/ChatScreen'
import UserProfileScreen from '../../screens/SharedScreens/UserProfileScreen'

const Stack = createStackNavigator()

const MessagesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
    </Stack.Navigator>
  )
}

export default MessagesStack

const styles = StyleSheet.create({})