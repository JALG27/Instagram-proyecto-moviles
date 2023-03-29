import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from './navigationFiles/AuthStack'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens';
enableScreens(false);


const Navigation = () => {
    return (
        <NavigationContainer styles={{}}>
            <AuthStack />
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})