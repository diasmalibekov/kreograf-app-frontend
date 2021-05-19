import React, {useContext, useEffect} from 'react' 
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import StoreContext from '../context/StoreContext'

import ResultItem from '../components/ResultItem'

const ProductList = ({navigation}) => {
	const {products, fetchProducts} = useContext(StoreContext)
	
	useEffect(() => {
		fetchProducts()
	}, [])
	console.log(products)
	return (
		<View>
			<FlatList 
				data={products}
				keyExtractor={product => product._id}
				renderItem={({item}) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('Detail', {id: item._id})}>
							<View style={styles.product}>
								<Image style={styles.image} source={{uri: item.image}} />
								<Text>{item.title}, цена {item.price} рублей. </Text>
								</View>
						</TouchableOpacity>
					)
				}}
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