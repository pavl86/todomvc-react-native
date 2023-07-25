import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";


export default function Form ({ addHandler }) {
    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder="What needs to be done?"/>
            <Button color={'green'} onPress={() => addHandler(text)} title="add"/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    }
});