import formatMoney from "helpers/formatMoney"
import Container, { SummaryBottom, SummaryTop } from "./style"
import trashIcon from 'assets/icons/trash.svg'
import QuantitySelector from "components/QuantitySelector"
import CartBottom from "components/CartBottom"
import useCart from "hooks/useCart"

function CartListMobile (){

    const { cartProductList, removeProduct } = useCart()

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
                                <button onClick={() => {removeProduct(product.id)}}>
                                    <img src={trashIcon} alt="" />
                                </button>
                            </SummaryTop>
                            <SummaryBottom>
                                <QuantitySelector product={product}/>
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