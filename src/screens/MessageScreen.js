import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const MessageScreen = () => {
	return (
		<View style={styles.container}>
			<Text>MESSAGE SCREEN</Text>
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

export default MessageScreen