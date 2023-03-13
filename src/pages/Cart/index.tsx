import CartListContainer from "components/CartListContainer"
import EmptyCart from "components/EmptyCart"
import useCart from "hooks/useCart"
import { useState } from "react"

export function Cart(){

    const { cartTotalQuantity } = useCart()

    return  cartTotalQuantity === 0 ? <EmptyCart/> : <CartListContainer/>
}