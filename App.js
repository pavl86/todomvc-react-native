import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import ToDoList from './components/ToDoList';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  const [filter, setFilter] = useState('all');
  const [data, setData] = useState(TEST_DATA);
  const [filteredData, setFilteredData] = useState(data);
  const [activeItemsCount, setActiveItemsCount] = useState(data.length);

  const addItem = (text) => {
    const newData = [...data, { id: data.length, text, done: false }];
    setData(newData);
  };

  useEffect(() => {
    const count = data.filter((item) => !item.done).length;
    setActiveItemsCount(count);

    let newData = [];
    switch (filter) {
      case 'active':
        newData = data.filter((item) => !item.done);
        break;
      case 'done':
        newData = data.filter((item) => item.done);
        break;
      default:
        newData = [...data];
    }

    setFilteredData(newData);
  }, [filter, data]);

  return (
    <View style={styles.container}>
      <Header onAddClick={addItem} />
      <ToDoList data={filteredData} update={setData} />
      <Footer
        count={activeItemsCount}
        activeBtn={filter}
        onBtnClick={setFilter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

const TEST_DATA = [
  { id: 0, text: 'Покормить котов', done: false },
  { id: 1, text: 'Позавтракать', done: false },
  { id: 2, text: 'Выпить кофе', done: false },
  { id: 3, text: 'Поработать', done: false },
  { id: 4, text: 'Пообедать', done: false },
  { id: 5, text: 'Поработать опять', done: false },
  { id: 6, text: 'Покормить котов опять', done: false },
  { id: 7, text: 'Поужинать', done: false },
  { id: 8, text: 'Поучить английский', done: false },
  { id: 9, text: 'Почитать перед сном', done: false },
  { id: 10, text: 'Поспать', done: false },
];
