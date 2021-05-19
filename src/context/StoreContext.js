import React, {useState} from 'react'
import request from '../api/request'

const StoreContext = React.createContext()

export const StoreProvider = ({children}) => {
	const [products, setProducts] = useState([])

	const fetchProducts = async () => {
	let response 
	try {
		response = await request.get('/api/products')
		setProducts(response.data)
		console.log(products)
	}catch(err) {
		console.log(err)
	}
}

	return <StoreContext.Provider value={{products, fetchProducts}}>
		{children}
	</StoreContext.Provider>
}

export default StoreContext