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
                  <Image source={require('../icons/shop_basket.png')} style={styles.basketIcon} />
                  <Text style={styles.infoPrice}>{item.price}&#8381;</Text>
                  <Text style={styles.infoTitle}>{item.title}</Text>
                  <Text style={styles.vendor}>Арт./Код: {item.vendorCode}</Text>
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
    paddingTop: 25,
    paddingLeft: 10,
    width: 150
  },
  basketIcon: {
    position: 'absolute',
    top: 5,
    right: 0,
    width: 32,
    height: 32
  },
  infoPrice: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10
  },
  infoTitle: {
    fontSize: 16,
    marginBottom: 45
  },
  vendor: {
    color: 'grey'
  }
})

export default ProductList
