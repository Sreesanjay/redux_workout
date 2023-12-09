import {memo} from "react"
import "./CartButtons.css";
 function BeforeCart({addTocart}) {
  return (
    <div className="before-cart">
         <button className="add-cart-button" onClick={addTocart}> 
            Add to cart
         </button>
    </div>
  )
}
export default memo(BeforeCart)