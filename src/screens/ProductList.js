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
    <View>
      <FlatList
        data={products}
        keyExtractor={product => product._id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Получатель', {id: item._id})}>
              <View style={styles.product}>
                <Image style={styles.image} source={{uri: item.image}} />
                <Text>{item.title}, цена {item.price} рублей. </Text>
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
  product: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 5
  },
  image: {
    width: 150,
    height: 150
  }
})

export default ProductList
