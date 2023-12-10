import {Header, ProductList} from './components';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchUser } from './redux/cart';

function App() {
  const {userDetails} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const counterRef = useRef(1)
  useEffect(()=>{
    dispatch(fetchUser(counterRef.current))
  },[dispatch])
  function loadMoreUser(){
    console.log("calling")
    dispatch(fetchUser(++counterRef.current))
    
  }
  return (
    <div className="App">
      <Header></Header>
      <ProductList></ProductList>
      <button onClick={loadMoreUser}>New User</button>
      <pre style={{color:'white'}}>{JSON.stringify(userDetails,undefined,4)}</pre>
    </div>
  );
}

export default App;
