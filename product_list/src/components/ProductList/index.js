import { useSelector } from "react-redux"
import AfterCart from "./CartButtons/AfterCart"
import BeforeCart from "./CartButtons/BeforeCart"
export default function CartButtons({product}) {
    const {cartList} = useSelector((state) => state.cart)
    const cartCount = cartList.find(item=>item?.id === product?.id)?.count;
    return (
        <>
        {cartCount > 0 ? 
            <AfterCart cartCount = {cartCount} productId = {product.id} />
            :
            <BeforeCart product={product} />
        }
        </>
    )
}
