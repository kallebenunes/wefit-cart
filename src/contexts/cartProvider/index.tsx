import { createContext, ReactNode, useEffect, useState } from "react"
import produce from 'immer'

export interface CartProduct extends Product {
    quantity: number
}

export interface CartContext {
    cartProductList: CartProduct[],
    addProduct: (product: Product) => CartProduct,
    removeProduct: (productId: number) => void,
    updateProductQuantity: (productId: number, quantity: number) => CartProduct,
    resetCart: () => void,
    cartTotalValue: number,
    cartTotalQuantity: number
}

export const CartContext = createContext({} as CartContext)


interface CartProviderProps {
    children: ReactNode
}

function CartProvider ({children}: CartProviderProps){
    
    const [cartProductList, setCartProductList] = useState<CartProduct[]>([] as CartProduct[])
    const [cartTotalValue, setCartTotalValue] = useState(0)
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0)

    function updateProductQuantity(productId: number, quantity: number){
        let currentProductIndex = cartProductList.findIndex(product => product.id === productId) 
        let newProduct = {
            ...cartProductList[currentProductIndex],
            quantity
        }

        let newProductList = produce(cartProductList, draft => {
            draft.splice(currentProductIndex, 1, newProduct)
        })

        setCartProductList(newProductList)

        return newProduct
    }

    function addProduct(product: Product){

        let productAlreadyOnCart = cartProductList.find(currentProduct  => currentProduct.id === product.id)
       
        if(productAlreadyOnCart){
            return updateProductQuantity(productAlreadyOnCart.id, productAlreadyOnCart.quantity + 1)
        }

        let cartProduct: CartProduct = {
            ...product,
            quantity: 1
        }
        setCartProductList([...cartProductList, cartProduct])

        return  cartProduct
    }

    function removeProduct(productId: number){
        const newProductList = cartProductList.filter(product => !(product.id === productId))
        setCartProductList(newProductList)
    }

    function resetCart(){
        setCartProductList([])
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
        updateProductQuantity,
        resetCart,
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

