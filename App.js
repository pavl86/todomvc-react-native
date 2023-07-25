import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import Header from './components/Header';
import ListToDo from './components/ListToDo'
import Form from './components/Form';


export default function App() {

  const [listOfItems, setListOfItems] = useState([
    {text: 'Сходить в магазин', key: '1'},
    {text: 'Забрать Олю с работы', key: '2'},
    {text: 'Отправить посылку', key: '3'},
    {text: 'Поиграть с котами', key: '4'},
    {text: 'Устроиться на работу', key: '5'}
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ... list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ListToDo el={item} deleteHandler={deleteHandler} />
        )} />
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}