import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'

import request from '../api/request'
import Countdown from '../components/Countdown'
import PriceScroll from '../components/PriceScroll'

const ProductDetail = ({route, navigation}) => {
  const [product, setProduct] = useState(null)
  const productId = route.params.id

  const getProduct = async id => {
    const response = await request.get(`/api/products/${id}`)
    setProduct(response.data)
  }

  useEffect(() => {
    getProduct(productId)
  }, [])

  if (!product) {
    return null
  }

  return <View style={styles.container}>
    <ScrollView>
      <Countdown />
      <View style={styles.imageContainer}>
        <Image style={styles.produсtImage} source={{uri: product.image}} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.priceUnit}>
          <Text style={styles.price}>{product.price} &#8381;</Text>
          <PriceScroll />
          <Image source={require('../icons/shop_basket.png')} style={styles.basketIcon} />
        </View>
        <View style={styles.purchasesUnit}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.primaryText}>Нужно выкупить: </Text>
              <Text style={styles.secondaryText}>{product.needToBuy}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.primaryText}>Выкуплено: </Text>
              <Text style={styles.secondaryText}>{product.bought}</Text>
            </View>
        </View>
        <Text style={{...styles.primaryText, marginBottom: 10}}>Арт./Код: {product.vendorCode}</Text>
      </View>
    </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  produсtImage: {
    width: '100%',
    height: 325
  },
  imageContainer: {
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 2,
    marginBottom: 15
  },
  info: {
    paddingHorizontal: 20
  },
  priceUnit: {
    marginBottom: 12
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },
  title: {
  fontWeight: 'bold',
  fontSize: 14,
  marginBottom: 21,
  color: '#393939'
  },
  basketIcon: {
    position: 'absolute',
    right: -8,
    width: 51,
    height: 51
  },
  purchasesUnit: {
    paddingBottom: 10,
    marginBottom: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#E6E6E6'
  },
  primaryText: {
    color: '#89888D',
    fontSize: 16
  },
  secondaryText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default ProductDetail
