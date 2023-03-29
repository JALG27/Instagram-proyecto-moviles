import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ProfileScreen from '../../screens/ProfileStackScreens/ProfileScreen'
import PostScreen from '../../screens/SharedScreens/PostScreen'
import EditProfileScreen from '../../screens/ProfileStackScreens/EditProfileScreen'
import SavedScreen from '../../screens/SharedScreens/SavedScreen'

const Stack = createStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Saved" component={SavedScreen} />
    </Stack.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})