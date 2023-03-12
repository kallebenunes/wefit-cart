import EmptyCart from "components/EmptyCart"
import { useState } from "react"
import Container from "./style"

export function Cart(){

    const [isEmptyCart, setIsEmptyCart] = useState(true)

    return  isEmptyCart ? <EmptyCart/> : <h1>CartList</h1>
}