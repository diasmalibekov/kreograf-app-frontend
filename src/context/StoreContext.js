import React, {useState} from 'react'
import {ActivityIndicator, View} from 'react-native'

import request from '../api/request'

const StoreContext = React.createContext()

export const StoreProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)

  const fetchProducts = async (page) => {
    let response
    try {
      response = await request.get(`/api/products?page=${page}`)
      setProducts([...products, ...response.data])
    }catch(err) {
      console.log(err)
    }
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  return <StoreContext.Provider value={{products, fetchProducts, page, nextPage}}>
    {children}
  </StoreContext.Provider>
}

export default StoreContext
