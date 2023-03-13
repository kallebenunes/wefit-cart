import formatMoney from "helpers/formatMoney";
import Container, { ProductInfo, SubTotal } from "./style";
import trashIcon from 'assets/icons/trash.svg'
import QuantitySelector from "components/QuantitySelector";
import CartBottom from "components/CartBottom";

function CartListDesktop(){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Qtd</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ProductInfo>
                                <img src="https://wefit-react-web-test.s3.amazonaws.com/spider-man.png" alt="" />
                                <div>
                                    <p>Homem Aranaha</p>
                                    <span>{formatMoney(9.99)}</span>
                                </div>
                            </ProductInfo>
                        </td>
                        <td>
                            <QuantitySelector/>
                        </td>
                        <td>
                            <SubTotal>
                                <p>{formatMoney(9.99)}</p>
                                <button>
                                    <img src={trashIcon} alt="" />
                                </button>
                            </SubTotal>
                        </td>
                    </tr>
                </tbody>
            </table>
            <CartBottom/>
        </Container>
    )
}

export default CartListDesktop