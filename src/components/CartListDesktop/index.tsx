import formatMoney from "helpers/formatMoney";
import Container, { ProductInfo, SubTotal } from "./style";
import trashIcon from 'assets/icons/trash.svg'
import QuantitySelector from "components/QuantitySelector";
import CartBottom from "components/CartBottom";
import useCart from "hooks/useCart";

function CartListDesktop(){

    const {cartProductList} = useCart()

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
                   {cartProductList.map(product => (
                     <tr>
                     <td>
                         <ProductInfo>
                             <img src={product.image} alt="" />
                             <div>
                                 <p>{product.title}</p>
                                 <span>{formatMoney(product.price)}</span>
                             </div>
                         </ProductInfo>
                     </td>
                     <td>
                         <QuantitySelector/>
                     </td>
                     <td>
                         <SubTotal>
                             <p>{formatMoney(product.price * product.quantity)}</p>
                             <button>
                                 <img src={trashIcon} alt="" />
                             </button>
                         </SubTotal>
                     </td>
                 </tr>
                   ))}
                </tbody>
            </table>
            <CartBottom/>
        </Container>
    )
}

export default CartListDesktop
