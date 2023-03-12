import Container from "./style"

interface ProductListViewProps {
    productList: Product[]
}

function ProductListView({productList}: ProductListViewProps){

    return(
        <Container>
            <ul>
                {productList.map(product => {
                    return (
                        <li key={product.id}>
                        <img src={product.image} alt="" />
                        <p>{product.name}</p>
                        <span>{product.price}</span>
                    </li>    
                    )
                })}
            </ul>
        </Container>
    )
}

export default ProductListView