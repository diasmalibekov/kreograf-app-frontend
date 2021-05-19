import React from 'react'
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductList from '../screens/ProductList'
import MessageScreen from '../screens/MessageScreen'
import AccountScreen from '../screens/AccountScreen'
import BasketScreen from '../screens/BasketScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import ProductDetail from '../screens/ProductDetail'

const Stack = createStackNavigator()
const myStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Товары' component={ProductList}/>
			<Stack.Screen name='Detail' component={ProductDetail}/>
		</Stack.Navigator>
	)
}

const Tab = createBottomTabNavigator()
const TabNavigation = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				style: {
					height: 69
				}
			}}
		>
			<Tab.Screen name='List' component={myStack}
				options={{
					tabBarIcon: ({focused}) => (
						<View style={{alignItems: 'center', justifyContent: 'center'}}>
							<Image 
								source={require('../icons/home.png')}
								resizeMode='contain'
								style={{
									width: 26,
									height: 30,
									tintColor: focused ? '#e32f45' : '#748c94'
								}}
							/>
						</View>
					)
				}} 
			/>
			<Tab.Screen name='Regist' component={RegistrationScreen}
				options={{
					tabBarIcon: ({focused}) => (
						<View style={{alignItems: 'center', justifyContent: 'center'}}>
							<Image 
								source={require('../icons/registration.png')}
								resizeMode='contain'
								style={{
									width: 26,
									height: 30,
									tintColor: focused ? '#e32f45' : '#748c94'
								}}
							/>
						</View>
					)
				}} 
			/>
			<Tab.Screen name='Message' component={MessageScreen}
				options={{
					tabBarIcon: ({focused}) => (
						<View style={{alignItems: 'center', justifyContent: 'center'}}>
							<Image 
								source={require('../icons/message.png')}
								resizeMode='contain'
								style={{
									width: 26,
									height: 30,
									tintColor: focused ? '#e32f45' : '#748c94'
								}}
							/>
						</View>
					)
				}}
			/>
			<Tab.Screen name='Basket' component={BasketScreen}
				options={{
					tabBarIcon: ({focused}) => (
						<View style={{alignItems: 'center', justifyContent: 'center'}}>
							<Image 
								source={require('../icons/basket.png')}
								resizeMode='contain'
								style={{
									width: 26,
									height: 30,
									tintColor: focused ? '#e32f45' : '#748c94'
								}}
							/>
						</View>
					)
				}}
			/>
			<Tab.Screen name='Account' component={AccountScreen}
				options={{
					tabBarIcon: ({focused}) => (
						<View style={{alignItems: 'center', justifyContent: 'center'}}>
							<Image 
								source={require('../icons/account.png')}
								resizeMode='contain'
								style={{
									width: 26,
									height: 30,
									tintColor: focused ? '#e32f45' : '#748c94'
								}}
							/>
						</View>
					)
				}}
			/>
		</Tab.Navigator>
	)
}

export default TabNavigation