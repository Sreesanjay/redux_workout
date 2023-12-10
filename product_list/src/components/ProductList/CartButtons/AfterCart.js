import {memo} from "react"
import "./CartButtons.css";
import { useDispatch } from "react-redux";
import { increment,decrement } from "../../../redux/cart";

 function AfterCart({cartCount, productId}) { 
  const dispatch = useDispatch() 
  return (
    <div>
      <div className="after-cart">
         <button className="cart-counter-button" onClick={()=>dispatch(decrement(productId))}>
            -
         </button>
         <div className="cart-count">{cartCount}</div>
         <button className="cart-counter-button" onClick={()=>dispatch(increment(productId))}>
            +
         </button>
      </div>
    </div>
  )
}

export default memo(AfterCart)