import { FlatList, View, StyleSheet } from 'react-native';
import ToDoListItem from './ToDoListItem';

export default function ToDoList({ data, update }) {
  const toggle = (id) => {
    const newData = data.map((el) => {
      if (el.id === id) {
        el.done = !el.done;
      }
      return el;
    });

    update(newData);
  };

  const remove = (id) => {
    const newData = data.filter((el) => el.id !== id);
    update(newData);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ToDoListItem
            item={item}
            toggle={() => toggle(item.id)}
            remove={() => remove(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
});
