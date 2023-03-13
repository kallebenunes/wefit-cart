import Container, { CartSummary } from "./styles"
import logoImg from './../../assets/logo.svg'
import minicartIcon from './../../assets/icons/minicart-icon.svg'
import useCart from "hooks/useCart"
import { NavLink, useNavigate } from "react-router-dom"

function Header(){

    const {cartTotalQuantity} = useCart()    

    const navigate = useNavigate()

    function handleMinicart(e: any){
        
        navigate('/cart')

    }

    return (
        <Container>

            <NavLink to="/">
                <img src={logoImg}  alt="" />
            </NavLink>

            <CartSummary onClick={handleMinicart}>
                <div>
                    <p>Meu carrinho</p>
                    <span> {cartTotalQuantity} itens </span>
                </div>
                <img src={minicartIcon} alt="" />
            </CartSummary>
            
        </Container>
    )
}

export default Header