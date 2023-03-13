import formatMoney from "helpers/formatMoney"
import Container, { SummaryBottom, SummaryTop } from "./style"
import trashIcon from 'assets/icons/trash.svg'
import QuantitySelector from "components/QuantitySelector"
import CartBottom from "components/CartBottom"
import useCart from "hooks/useCart"

function CartListMobile (){

    const {cartProductList} = useCart()

    return (
        <Container>
            <ul>
                {cartProductList.map(product => (
                    <li>
                        <img src={product.image} alt="" />
                        <section>
                            <SummaryTop>
                                <p>{product.title}</p>
                                <span>{formatMoney(product.price)}</span>
                                <button>
                                    <img src={trashIcon} alt="" />
                                </button>
                            </SummaryTop>
                            <SummaryBottom>
                                <QuantitySelector/>
                                <span>
                                    {formatMoney(product.price * product.quantity)}
                                </span>
                            </SummaryBottom>
                        </section>
                    </li>
                ))}
            </ul>
            <CartBottom/>
        </Container>
    )
}

export default CartListMobile