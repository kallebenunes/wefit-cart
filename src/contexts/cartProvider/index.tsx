import { createContext, ReactNode, useState } from "react"

export interface CartContext {
    cartProductList: CartProduct[],
    addProduct: (product: Product) => CartProduct,
    removeProduct: (productId: number) => void
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

    console.log(cartProductList)

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

    }

    const cartContextVaue: CartContext = {
        cartProductList,
        addProduct,
        removeProduct
    }

    return (
        <CartContext.Provider value={cartContextVaue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider