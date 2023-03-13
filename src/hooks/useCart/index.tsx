import { CartContext } from "contexts/cartProvider";
import { useContext } from "react";

function useCart(){
    const context = useContext(CartContext)

    return context
}

export default useCart