import Container from "./style"
import incrementIcon from 'assets/icons/increment.svg'
import decrementIcon from 'assets/icons/decrement.svg'
import { CartProduct } from "contexts/cartProvider"
import useCart from "hooks/useCart"

interface QunatitySelectorProps {
    product: CartProduct
}

function QuantitySelector({ product }: QunatitySelectorProps) {

    const {updateProductQuantity} = useCart()

    function handleIncrement(){
        updateProductQuantity(product.id, product.quantity + 1)
    }

    function handleDecrement(){
        if(product.quantity > 1){
            updateProductQuantity(product.id, product.quantity - 1)
        }
    }

    return (
        <Container>
            <button onClick={() => {handleDecrement()}}>
                <img src={decrementIcon} alt="" />
            </button>
            <p>{product.quantity}</p>
            <button onClick={() => {handleIncrement()}}>
                <img src={incrementIcon} alt="" />
            </button>
        </Container>
    )
}

export default QuantitySelector