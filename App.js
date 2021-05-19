import React from 'react'
import { NavigationContainer } from '@react-navigation/native'


import {StoreProvider} from './src/context/StoreContext'
import TabNavigation from './src/components/navigation'

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}

export default () => {
  return <StoreProvider> 
    <App /> 
  </StoreProvider>
}