import React, {useContext} from 'react' 
import {View, Text, StyleSheet, Image} from 'react-native'

import StoreContext from '../context/StoreContext'


const ProductDetail = ({route, navigation}) => {
	const {products} = useContext(StoreContext)

	const product = products.find(item => item._id === route.params.id)
	// const product = {title: 'Bra', price: 315}

	return <View>
		<Text style={styles.sale}>Скидка до {product.salesTime.day}. 0{product.salesTime.month}!!!</Text>
		<Image style={styles.image} source={{uri: product.image}} />
		<Text style={styles.text}>{product.title}</Text>
		<Text style={styles.text}>Цена - {product.price}</Text>
		<Text style={styles.text}>Арт/Код: {product.vendorCode} </Text>
	</View> 
}

const styles = StyleSheet.create({
	image: {
		width: 250,
		height: 250,
		marginBottom: 15
	},
	text: {
		fontSize: 20,
		marginBottom: 10
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