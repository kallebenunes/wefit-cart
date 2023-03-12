import Container from "./style";
import emptyCartImg from 'assets/empty-cart.svg'

function EmptyCart(){
    return (
        <Container>
            <div>
                <p>Parece que não há nada por aqui {':('}</p>
                <img src={emptyCartImg} alt="" />
                <button>Voltar</button>
            </div>
        </Container>
    )
}

export default EmptyCart