import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Footer({ count, activeBtn, onBtnClick }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{{count} === 1 ? '1 item left' : count + ' items left'}</Text>
      <View style={styles.btnContainer}>
        <Pressable
          style={[styles.btn, activeBtn === 'all' && styles.activeBtn]}
          onPress={() => onBtnClick('all')}>
          <Text>All</Text>
        </Pressable>

        <Pressable
          style={[styles.btn, activeBtn === 'active' && styles.activeBtn]}
          onPress={() => onBtnClick('active')}>
          <Text>Active</Text>
        </Pressable>

        <Pressable
          style={[styles.btn, activeBtn === 'done' && styles.activeBtn]}
          onPress={() => onBtnClick('done')}>
          <Text>Completed</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexBasis: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
  },
  text: {
    paddingLeft: 8,
    minWidth: 20,
  },
  btnContainer: {
    marginLeft: 8,
    paddingTop: 6,
    flexDirection: 'row',
  },
  btn: {
    width: 80,
    height: 32,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 4
  },
  activeBtn: {
    color: 'white',
    backgroundColor: 'lightblue',
  },
});
