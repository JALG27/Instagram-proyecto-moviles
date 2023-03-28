import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Navigation = () => {
    return (
        <SafeAreaView styles={styles.container}>
            <Text>index</Text>
        </SafeAreaView>)
}

export default Navigation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})