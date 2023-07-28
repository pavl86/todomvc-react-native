import { Button, TextInput, StyleSheet, View } from 'react-native';
import { useState } from 'react';

export default function Header({ onAddClick }) {
  const [text, setText] = useState('');

  const add = () => {
    onAddClick(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="What needs to be done?"
      />
      <Button color={'lightblue'} title="add" disabled={!text} onPress={add} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingRight: 4,
  },
  input: {
    fontSize: 18,
    height: 40,
    marginTop: 4,
    // borderWidth: 1,
    paddingLeft: 24,
  },
});