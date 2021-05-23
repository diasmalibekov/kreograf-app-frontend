import React, {useContext, useEffect} from 'react'
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import StoreContext from '../context/StoreContext'

import ResultItem from '../components/ResultItem'

const ProductList = ({navigation}) => {
  const {page, nextPage, products, fetchProducts} = useContext(StoreContext)

  useEffect(() => {
    fetchProducts(page)
  }, [page])
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={product => product._id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Получатель', {id: item._id})}>
              <View style={styles.product}>
                <View>
                  <Image style={styles.image} source={{uri: item.image}} />
                </View>
                <View style={styles.info}>
                  <Text>{item.title}, цена {item.price} рублей. </Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}
        onEndReached={nextPage}
        onEndReachedThreshold={0}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  product: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    paddingTop: 10,
    paddingBottom: 15,
    flexDirection: 'row'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFF1F1'
  },
  info: {
  }
})

export default ProductList
