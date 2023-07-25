import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';

export default function ListToDo({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>
                {el.text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        // color: 'black',
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: '20%',
        width: '60%'
    }
});
