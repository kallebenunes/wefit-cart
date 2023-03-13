import formatMoney from "helpers/formatMoney"
import Container from "./style"

function CartBottom (){

    return (
        <Container>
            <button>Finalizer pedido</button>
            <div>
                <p>Total</p>
                <span>{formatMoney(29.99)}</span>
            </div>
        </Container>
    )

}

export default CartBottom