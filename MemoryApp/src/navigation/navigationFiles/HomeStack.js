import { StyleSheet, Text, View, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../../screens/HomeStackScreens/HomeScreen'
import UserProfileScreen from '../../screens/SharedScreens/UserProfileScreen'
import PostScreen from '../../screens/SharedScreens/PostScreen'
import SavedScreen from '../../screens/SharedScreens/SavedScreen'
import { Ionicons } from '@expo/vector-icons'

import logo from '../../../assets/m__memoryLogoColors.png'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Stack = createStackNavigator()

const HomeStack = ({ navigation }) => {

const onSavedPressed = () => {
  navigation.navigate("Saved")
}

  return (
    <Stack.Navigator screenOptions={{
      headerBackTitleVisible: false,
      headerTintColor: 'black'
    }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerLeft: () => (
          <Image style={{ width: 130, marginLeft: 10 }} source={logo} resizeMode="contain" />
        ),
        headerRight: () => (
          <TouchableOpacity onPress={onSavedPressed}>
            <Ionicons
              style={{ color: 'black', marginRight: 10 }}
              name={"ios-bookmark-outline"}
              size={27}
            />
          </TouchableOpacity>
        )
      }} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Saved" component={SavedScreen} options = {{
        title: "Saved Memories",
      }}/>
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})