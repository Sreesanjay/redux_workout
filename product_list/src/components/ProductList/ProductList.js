
import products from "../../api/products.json";
import CartButtons from './index'


import "./ProductList.css"
export default function ProductList() {
    // const {cartList} = useSelector((state) => state.cart)
  return (
    <section className="container">
    {products?.map((product, key) => (
       <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>
          <CartButtons product={product}/>
       </div>
    ))}
 </section>
  )
}
