import Container from "./style"
import incrementIcon from 'assets/icons/increment.svg'
import decrementIcon from 'assets/icons/decrement.svg'
import { CartProduct } from "contexts/cartProvider"

interface QunatitySelectorProps {
    product: CartProduct
}

function QuantitySelector({ product }: QunatitySelectorProps) {
    return (
        <Container>
            <button>
                <img src={decrementIcon} alt="" />
            </button>
            <p>{product.quantity}</p>
            <button>
                <img src={incrementIcon} alt="" />
            </button>
        </Container>
    )
}

export default QuantitySelector