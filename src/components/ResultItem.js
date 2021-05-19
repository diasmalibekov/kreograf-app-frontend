import React from 'react' 
import {View, Text, StyleSheet, Image} from 'react-native'

const ResultItem = ({product}) => {
	return (
		<View>
			<Image source={{uri: product.image}} />
		</View>
	)
}

const styles = StyleSheet.create({

})

export default ResultItem
