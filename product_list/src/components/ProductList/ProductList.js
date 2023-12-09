import { useState } from "react";
import { useSelector } from "react-redux";

import products from "../../api/products.json";
import AfterCart from "./CartButtons/AfterCart";
import BeforeCart from "./CartButtons/BeforeCart";


import "./ProductList.css"
export default function ProductList() {
    const [count, setCount] = useState(0);
    const cart = useSelector((state) => state.cart)
    console.log(cart)

    function addTocart(){
        setCount(1);
    }
  return (
    <section className="container">
    {products?.map((product, key) => (
       <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>
          {count === 0 ? 
          <BeforeCart addTocart = {addTocart} />  
          :
          <AfterCart/>
        }
       </div>
    ))}
 </section>
  )
}
