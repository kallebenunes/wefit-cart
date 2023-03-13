import formatMoney from "helpers/formatMoney"
import Container from "./style"
import trashIcon from 'assets/icons/trash.svg'
import { useEffect, useState } from "react"
import CartListDesktop from "components/CartListDesktop"
import CartListMobile from "components/CartListMobile"

function CartListContainer(){

    const [isMoible, setIsMobile] = useState(() => {
        return window.screen.width < 1024
    })

    useEffect(() => {
       window.addEventListener('resize', () => {
        if(window.screen.width > 1024){
            setIsMobile(false)
        } else {
            setIsMobile(true)
        }
       })
    }, [])

    return  isMoible ? <CartListMobile/> : <CartListDesktop/>
}

export default CartListContainer