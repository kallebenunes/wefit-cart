import Container, { CartSummary } from "./styles"
import logoImg from './../../assets/logo.svg'
import minicartIcon from './../../assets/icons/minicart-icon.svg'

function Header(){
    return (
        <Container>

            <img src={logoImg} alt="" />

            <CartSummary>
                <div>
                    <p>Meu carrinho</p>
                    <span> 0 itens </span>
                </div>
                <img src={minicartIcon} alt="" />
            </CartSummary>
            
        </Container>
    )
}

export default Header