import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const BasketScreen = () => {
	return (
		<View style={styles.container}>
			<Text>BASKET SCREEN</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default BasketScreen