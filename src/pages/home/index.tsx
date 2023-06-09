import LoadSpinner from "components/LoadSpinner"
import axios from 'axios'
import { useEffect, useState } from "react"
import ProductListView from "components/ProductListView"

function Home(){

    const [isLoading, setIsLoading] = useState<boolean>(true)

    const [productList, setProductList] = useState<Product[]>([] as Product[])

    async function loadProducts(){
        const {data} = await axios.get('https://raw.githubusercontent.com/kallebenunes/data/main/products')  
      
            setProductList(data.products)
            setIsLoading(false)
      
    }

    useEffect(() => {
        loadProducts()
    }, [])
    
    return isLoading ? <LoadSpinner/> : <ProductListView productList={productList} />
}

export default Home