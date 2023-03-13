import formatMoney from "helpers/formatMoney"
import Container, { SummaryBottom, SummaryTop } from "./style"
import trashIcon from 'assets/icons/trash.svg'
import QuantitySelector from "components/QuantitySelector"
import CartBottom from "components/CartBottom"

function CartListMobile (){
    return (
        <Container>
            <ul>
                <li>
                    <img src="https://wefit-react-web-test.s3.amazonaws.com/spider-man.png" alt="" />
                    <section>
                        <SummaryTop>
                            <p>Homem-aranha</p>
                            <span>{formatMoney(29.99)}</span>
                            <button>
                                <img src={trashIcon} alt="" />
                            </button>
                        </SummaryTop>
                        <SummaryBottom>
                            <QuantitySelector/>
                            <span>
                                {formatMoney(29.99)}
                            </span>
                        </SummaryBottom>
                    </section>
                </li>
            </ul>
            <CartBottom/>
        </Container>
    )
}

export default CartListMobile