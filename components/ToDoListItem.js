import { Pressable, Text, StyleSheet, View } from 'react-native';
import CheckBox from 'react-native-check-box';

export default function ToDoListItem({ item, toggle, remove }) {
  return (
    <View style={styles.container}>
      <CheckBox
        isChecked={item.done}
        onClick={toggle}
        style={styles.checkbox}
      />
      <Text style={[styles.text, item.done && styles.done]}>{item.text}</Text>
      <Pressable style={styles.removeBtn} onPress={remove}>
        <Text style={styles.removeText}>&#10005;</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  checkbox: {
    alignSelf: 'center',
  },
  text: {
    width: '80%',
    marginLeft: 8,
    paddingTop: 8,
    fontSize: 18,
    height: 44,
  },
  done: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  removeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: 32,
  },
  removeText: {
    color: '#cc9a9a',
  },
});
