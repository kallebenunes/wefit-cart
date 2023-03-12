import AddToCartButton from "components/AddToCartButton"
import formatMoney from "helpers/formatMoney"
import Container, { ProductCard } from "./style"

interface ProductListViewProps {
    productList: Product[]
}

function ProductListView({productList}: ProductListViewProps){

    return(
        <Container>
            <ul>
                {productList.map(product => {
                    return (
                        <ProductCard key={product.id}>
                            <img src={product.image} alt="" />
                            <p>{product.title}</p>
                            <span>{formatMoney(product.price)}</span>
                            <AddToCartButton/>
                        </ProductCard>    
                    )
                })}
            </ul>
        </Container>
    )
}

export default ProductListView