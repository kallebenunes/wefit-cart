
import Container from './style'
import addToCartIcon from 'assets/icons/add-to-cart-icon.svg'
import useCart from 'hooks/useCart'
import { useEffect, useState } from 'react'
import { CartProduct } from 'contexts/cartProvider'

interface AddToCartButtonProps {
    product: Product
}

function AddToCartButton({product}: AddToCartButtonProps){

    const { addProduct, cartProductList } = useCart()

    const [productAlreadyOnCart, setProductAreadyOnCart] = useState<CartProduct | undefined>((): CartProduct | undefined => {
        let productIsOnCart = cartProductList.find(cartProduct => product.id === cartProduct.id)

        return productIsOnCart 
    })

    useEffect(() => {
        let productIsOnCart = cartProductList.find(cartProduct => product.id === cartProduct.id)
      
        if(productIsOnCart){
            setProductAreadyOnCart(productIsOnCart)
        }
    } , [cartProductList])
    
    function handleAddToCart(){
        
         addProduct(product)
    }

    return (
        <Container isSelected={productAlreadyOnCart ? true : false} onClick={handleAddToCart}>
            <div>
                <img src={addToCartIcon} alt="" />
            </div>
            <span> <p>{ productAlreadyOnCart ? productAlreadyOnCart.quantity : 0} </p> </span>
            <p>{productAlreadyOnCart ? 'Item adicionado' : 'Adicionar ao carrinho'}</p>
        </Container>
    )
}

export default AddToCartButton



