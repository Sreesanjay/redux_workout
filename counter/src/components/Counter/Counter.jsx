import { useDispatch, useSelector } from "react-redux"
import { increment } from "../../Reducers/CounterReducer"
import {decrement } from "../../Reducers/CounterReducer"
export default function Counter() {
  const {value} = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <h1>{value}</h1>
    </div>
  )
}
