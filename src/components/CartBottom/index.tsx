import formatMoney from "helpers/formatMoney"
import useCart from "hooks/useCart"
import { useNavigate } from "react-router-dom"
import Container from "./style"

function CartBottom (){

    const {cartTotalValue, resetCart} = useCart()

    const navigate = useNavigate()

    function handleOrderPlaced(){
        navigate('/orderPlaced')
        resetCart()
    }
    
    return (
        <Container>
            <button onClick={handleOrderPlaced}>Finalizar pedido</button>
            <div>
                <p>Total</p>
                <span>{formatMoney(cartTotalValue)}</span>
            </div>
        </Container>
    )

}

export default CartBottom