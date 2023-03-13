import { createContext, ReactNode, useEffect, useState } from "react"

export interface CartContext {
    cartProductList: CartProduct[],
    addProduct: (product: Product) => CartProduct,
    removeProduct: (productId: number) => void,
    cartTotalValue: number,
    cartTotalQuantity: number
}

export const CartContext = createContext({} as CartContext)

export interface CartProduct extends Product {
    quantity: number
}

interface CartProviderProps {
    children: ReactNode
}

function CartProvider ({children}: CartProviderProps){
    
    const [cartProductList, setCartProductList] = useState<CartProduct[]>([] as CartProduct[])
    const [cartTotalValue, setCartTotalValue] = useState(0)
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0)

    function addProduct(product: Product){
        let cartProduct: CartProduct = {
            ...product,
            quantity: 1
        }
        setCartProductList([...cartProductList, cartProduct])

        return cartProduct
    }

    function updateProductAmoun(productId: number){

    }

    function removeProduct(productId: number){
        const newProductList = cartProductList.filter(product => !(product.id === productId))
        setCartProductList(newProductList)
    }

    useEffect(() => {
        setCartTotalValue(state => {
            return cartProductList.reduce((acc, product) => acc + (product.price * product.quantity) , 0)
        })

        setCartTotalQuantity(state => {
            return cartProductList.reduce((acc, product) => acc  + product.quantity , 0)
        })
    }, [cartProductList])

    const cartContextVaue: CartContext = {
        cartProductList,
        addProduct,
        removeProduct,
        cartTotalValue,
        cartTotalQuantity
    }

    return (
        <CartContext.Provider value={cartContextVaue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

