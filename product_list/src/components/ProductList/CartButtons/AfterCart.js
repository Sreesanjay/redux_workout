import {memo} from "react"
import "./CartButtons.css";
 function AfterCart() {
  return (
    <div>
      <div className="after-cart">
         <button className="cart-counter-button" >
            -
         </button>
         <div className="cart-count">1</div>
         <button className="cart-counter-button">
            +
         </button>
      </div>
    </div>
  )
}

export default memo(AfterCart)