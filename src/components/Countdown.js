import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Countdown = ({SalesTime}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name="time-outline" size={21} color="white" />
      </View>
      <View style={styles.textBlock}>
        <Text style={{...styles.text, fontSize: 13}} >ОСТАЛОСЬ</Text>
        <Text style={{...styles.text, fontSize: 16}} >22 ДНЯ : 17 ЧАСОВ : 55 МИНУТ</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 326,
    height: 60,
    backgroundColor: '#ff6600',
    flexDirection: 'row',
    borderBottomColor: '#DC2B00',
    borderBottomWidth: 1,
    borderTopColor: '#DC2B00',
    borderTopWidth: 1
  },
  icon: {
    marginLeft: 21,
    alignSelf: 'center'
  },
  textBlock: {
    marginLeft: 17,
    alignSelf: 'center'
  },
  text: {
    color: '#fff',
  }
})

export default Countdown
