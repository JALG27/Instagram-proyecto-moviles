import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import MessagesStack from './MessagesStack';
import NewPostScreen from '../../screens/SharedScreens/NewPostScreen';
import ProfileStack from './ProfileStack';

const Tabs = createBottomTabNavigator()
const TabIconSize = 32

const mainColor = '#1B6094'

const HomeTabs = () => {
    return (
        <Tabs.Navigator initialRouteName='HomeStack' screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
        }}>
            <Tabs.Screen name="HomeStack" component={HomeStack} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        style={{ color: 'black' }}
                        name={focused ? "home" : "home-outline"}
                        size={TabIconSize} />
                ),
            }} />
            <Tabs.Screen name="SearchStack" component={SearchStack} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        style={{ color: 'black' }}
                        name={focused ? "md-search-sharp" : "md-search-outline"}
                        size={TabIconSize} />
                ),
            }} />
            <Tabs.Screen name="NewPostScreen" component={NewPostScreen}options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        style={{ color: 'black' }}
                        name={focused ? "add-circle-sharp" : "add-circle-outline"}
                        size={TabIconSize} />
                ),
            }} />
            <Tabs.Screen name="InboxStack" component={MessagesStack} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        style={{ color: 'black' }}
                        name={focused ? "ios-chatbubbles-sharp" : "ios-chatbubbles-outline"}
                        size={TabIconSize} />
                ),
            }} />
            <Tabs.Screen name="ProfileStack" component={ProfileStack} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        style={{ color: 'black' }}
                        name={focused ? "md-person-circle-sharp" : "md-person-circle-outline"}
                        size={TabIconSize} />
                ),
            }} />
        </Tabs.Navigator>
    )
}

export default HomeTabs

const styles = StyleSheet.create({})