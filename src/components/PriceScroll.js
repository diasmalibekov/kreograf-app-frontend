import React from 'react'
import {Text, View, StyleSheet, Image, FlatList} from 'react-native'

const prices = [{id: '1', amount: '< 3 шт.', price: '700,00'},
                 {id: '2', amount: '4-10 шт.', price: '650,00'},
                 {id: '3', amount: '11-20 шт.', price: '600,00'},
                 {id: '4', amount: '21-30 шт.', price: '550,00'},
                 {id: '5', amount: '31-40 шт.', price: '500,00'}]

const PriceScroll = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../icons/left_arrow.png')} style={styles.chevron}/>
      <FlatList
        style={styles.list}
        data={prices}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <View style={styles.item}>
            <Text style={styles.price}>{item.price} &#8381;</Text>
            <Text style={styles.amount}>{item.amount}</Text>
          </View>
        }}
        />
      <Image source={require('../icons/right_arrow.png')} style=  {styles.chevron}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 237,
    height: 33

  },
  list: {
    marginHorizontal: 4
  },
  item: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 67,
    height: 33,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  chevron: {
    width: 9,
    height: 33,
    tintColor: 'grey'
  },
  price: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  amount: {
    fontSize: 13,
    color: 'grey'

  }
})

export default PriceScroll
