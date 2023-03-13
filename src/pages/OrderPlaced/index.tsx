import Container from "./style";
import orderPlacedImg from 'assets/finished-order.svg'

function OrderPlaced () {
    return (
        <Container>
        <div>
            <p>Compra realizada com sucesso!</p>
            <img src={orderPlacedImg} alt="" />
            <button>Voltar</button>
        </div>
    </Container>
    )
}

export default OrderPlaced