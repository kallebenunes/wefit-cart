
import Container from './style'
import addToCartIcon from 'assets/icons/add-to-cart-icon.svg'

function AddToCartButton(){
    return (
        <Container>
            <div>
                <img src={addToCartIcon} alt="" />
            </div>
            <span>0</span>
            <p>Adicionar ao carrinho</p>
        </Container>
    )
}

export default AddToCartButton