import Container from "./style";
import orderPlacedImg from 'assets/finished-order.svg'
import { NavLink } from "react-router-dom";

function OrderPlaced () {
    return (
        <Container>
        <div>
            <p>Compra realizada com sucesso!</p>
            <img src={orderPlacedImg} alt="" />
            <NavLink to={'/'}>Voltar</NavLink>
        </div>
    </Container>
    )
}

export default OrderPlaced