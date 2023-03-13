import CartListContainer from "components/CartListContainer"
import CartList from "components/CartListContainer"
import EmptyCart from "components/EmptyCart"
import { useState } from "react"
import Container from "./style"

export function Cart(){

    const [isEmptyCart, setIsEmptyCart] = useState(false)

    return  isEmptyCart ? <EmptyCart/> : <CartListContainer/>
}