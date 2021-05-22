import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'

import request from '../api/request'
import Countdown from '../components/Countdown'

const ProductDetail = ({route, navigation}) => {
  const [product, setProduct] = useState(null)
  const productId = route.params.id
  console.log(productId)

  const getProduct = async id => {
    const response = await request.get(`/api/products/${id}`)
    console.log(response)
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
        <Image style={styles.image} source={{uri: product.image}} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price} &#8381;</Text>
        <Text style={styles.text}>Арт/Код: {product.vendorCode} </Text>
      </View>
    </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  image: {
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
  sale: {
    fontSize: 20,
    color: 'red',
    marginVertical: 10
  },
  vendorCode: {
    fontSize: 20,
    color: 'grey'
  }
})

export default ProductDetail
