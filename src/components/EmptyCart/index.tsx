import Container from "./style";
import emptyCartImg from 'assets/empty-cart.svg'
import { NavLink } from "react-router-dom";

function EmptyCart(){
    return (
        <Container>
            <div>
                <p>Parece que não há nada por aqui {':('}</p>
                <img src={emptyCartImg} alt="" />
                <NavLink to={'/'}>Voltar</NavLink>
            </div>
        </Container>
    )
}

export default EmptyCart