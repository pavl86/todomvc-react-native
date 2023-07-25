import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>To do list:</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingTop: 60,
        height: 100,
        backgroundColor: 'silver'
    },
    text : {
        // flex: 1,
        fontSize: 28,
        color: 'red',
        fontWeight: 400,
        textAlign: 'center'
    },
});